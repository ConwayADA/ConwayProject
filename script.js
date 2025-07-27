// Futuristic Twitter Clone JavaScript
// Preloader functionality
window.addEventListener('load', function() {
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        setTimeout(() => {
            preloader.style.transition = 'opacity 0.5s ease';
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.remove();
            }, 500);
        }, 1500);
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Tweet submission functionality
    const tweetSubmit = document.querySelector('.tweet-submit');
    const tweetTextarea = document.querySelector('.composer-input textarea');
    
    if (tweetSubmit && tweetTextarea) {
        tweetSubmit.addEventListener('click', function() {
            const tweetContent = tweetTextarea.value.trim();
            if (tweetContent) {
                // In a real app, this would send the tweet to a server
                // For this demo, we'll just add it to the feed
                addTweetToFeed(tweetContent);
                tweetTextarea.value = '';
                
                // Show a visual feedback
                tweetSubmit.classList.add('pulse');
                setTimeout(() => {
                    tweetSubmit.classList.remove('pulse');
                }, 2000);
            }
        });
    }
    
    // Function to add a new tweet to the feed
    function addTweetToFeed(content) {
        const tweetFeed = document.querySelector('.tweet-feed');
        const currentUser = {
            name: 'Charles Hoskinson',
            handle: '@IOHK_Charles',
            avatar: 'https://pbs.twimg.com/profile_images/1913575416519876608/LlG35-D8_400x400.jpg'
        };
        
        const now = new Date();
        const timestamp = formatTime(now);
        
        const tweetElement = document.createElement('div');
        tweetElement.className = 'tweet-card';
        tweetElement.innerHTML = `
            <img src="${currentUser.avatar}" alt="User">
            <div class="tweet-content">
                <div class="tweet-header">
                    <h4>${currentUser.name}</h4>
                    <span>${currentUser.handle}</span>
                    <span class="timestamp">${timestamp}</span>
                </div>
                <p>${content}</p>
                <div class="tweet-actions">
                    <button class="action-btn"><i class="far fa-comment"></i> 0</button>
                    <button class="action-btn"><i class="fas fa-retweet"></i> 0</button>
                    <button class="action-btn"><i class="far fa-heart"></i> 0</button>
                    <button class="action-btn"><i class="fas fa-share"></i></button>
                </div>
            </div>
        `;
        
        // Add to the top of the feed
        tweetFeed.insertBefore(tweetElement, tweetFeed.firstChild);
        
        // Add event listeners to the new buttons
        addTweetActionListeners(tweetElement);
    }
    
    // Format time for tweet timestamp
    function formatTime(date) {
        const now = new Date();
        const diffMs = now - date;
        const diffMins = Math.floor(diffMs / 60000);
        const diffHours = Math.floor(diffMs / 3600000);
        const diffDays = Math.floor(diffMs / 86400000);
        
        if (diffMins < 1) return 'Just now';
        if (diffMins < 60) return `${diffMins}m`;
        if (diffHours < 24) return `${diffHours}h`;
        return `${diffDays}d`;
    }
    
    // Add event listeners to tweet action buttons
    function addTweetActionListeners(tweetElement) {
        const likeButtons = tweetElement.querySelectorAll('.action-btn:nth-child(3)');
        likeButtons.forEach(button => {
            button.addEventListener('click', function() {
                const icon = this.querySelector('i');
                const countElement = this.querySelector('span') || this;
                let count = 0;
                
                if (countElement !== this) {
                    count = parseInt(countElement.textContent) || 0;
                }
                
                if (icon.classList.contains('far')) {
                    // Like the tweet
                    icon.classList.remove('far');
                    icon.classList.add('fas');
                    icon.style.color = '#ff3860';
                    count++;
                } else {
                    // Unlike the tweet
                    icon.classList.remove('fas');
                    icon.classList.add('far');
                    icon.style.color = '';
                    count = Math.max(0, count - 1);
                }
                
                if (countElement !== this) {
                    countElement.textContent = count;
                }
            });
        });
    }
    
    // Add event listeners to all existing tweet action buttons
    document.querySelectorAll('.tweet-card').forEach(addTweetActionListeners);
    
    // Search functionality
    const searchInput = document.querySelector('.search-bar input');
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                const query = this.value.trim();
                if (query) {
                    // In a real app, this would search tweets
                    console.log(`Searching for: ${query}`);
                    // Visual feedback
                    this.style.borderColor = 'var(--accent-blue)';
                    setTimeout(() => {
                        this.style.borderColor = 'var(--border-color)';
                    }, 1000);
                }
            }
        });
    }
    
    // Simulate live crypto price updates
    function updateCryptoPrice() {
        const priceElement = document.querySelector('.price');
        const changeElement = document.querySelector('.change');
        
        if (priceElement && changeElement) {
            // Simulate price change
            const currentPrice = parseFloat(priceElement.textContent.replace('$', ''));
            const change = (Math.random() - 0.5) * 0.02; // -1% to +1%
            const newPrice = currentPrice * (1 + change);
            const percentageChange = (change * 100).toFixed(2);
            
            priceElement.textContent = `$${newPrice.toFixed(4)}`;
            
            if (change >= 0) {
                changeElement.textContent = `+${percentageChange}%`;
                changeElement.className = 'change positive';
            } else {
                changeElement.textContent = `${percentageChange}%`;
                changeElement.className = 'change negative';
            }
        }
    }
    
    // Update crypto price every 10 seconds
    setInterval(updateCryptoPrice, 10000);
    
    // Add a subtle animation to new tweets
    function animateNewTweet(tweetElement) {
        tweetElement.style.opacity = '0';
        tweetElement.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            tweetElement.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            tweetElement.style.opacity = '1';
            tweetElement.style.transform = 'translateY(0)';
        }, 10);
    }
    
    // Initialize animations for existing tweets
    document.querySelectorAll('.tweet-card').forEach((tweet, index) => {
        setTimeout(() => {
            tweet.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            tweet.style.opacity = '1';
            tweet.style.transform = 'translateY(0)';
        }, index * 100);
    });
});

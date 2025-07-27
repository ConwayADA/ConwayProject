// Cardano Wallet Dashboard JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Initialize wallet dashboard
    initializeWallet();
    
    // Set up event listeners
    setupEventListeners();
    
    // Simulate wallet data updates
    startDataSimulation();
});

function initializeWallet() {
    // In a real implementation, this would connect to a Cardano wallet
    console.log("Initializing Cardano wallet dashboard...");
    
    // Update wallet balance display
    updateWalletBalance();
    
    // Load assets
    loadAssets();
    
    // Load transaction history
    loadTransactions();
    
    // Initialize charts (if implemented)
    initializeCharts();
}

function setupEventListeners() {
    // Send button
    const sendBtn = document.querySelector('.action-btn:nth-child(1)');
    if (sendBtn) {
        sendBtn.addEventListener('click', function() {
            showSendModal();
        });
    }
    
    // Receive button
    const receiveBtn = document.querySelector('.action-btn:nth-child(2)');
    if (receiveBtn) {
        receiveBtn.addEventListener('click', function() {
            showReceiveModal();
        });
    }
    
    // Swap button
    const swapBtn = document.querySelector('.action-btn:nth-child(3)');
    if (swapBtn) {
        swapBtn.addEventListener('click', function() {
            showSwapModal();
        });
    }
    
    // History button
    const historyBtn = document.querySelector('.action-btn:nth-child(4)');
    if (historyBtn) {
        historyBtn.addEventListener('click', function() {
            showTransactionHistory();
        });
    }
    
    // Refresh button
    const refreshBtn = document.querySelector('.icon-btn:first-child');
    if (refreshBtn) {
        refreshBtn.addEventListener('click', function() {
            refreshWalletData();
        });
    }
    
    // Stake button
    const stakeBtn = document.querySelector('.stake-btn');
    if (stakeBtn) {
        stakeBtn.addEventListener('click', function() {
            showStakingModal();
        });
    }
    
    // Security button
    const securityBtn = document.querySelector('.security-btn');
    if (securityBtn) {
        securityBtn.addEventListener('click', function() {
            showSecurityModal();
        });
    }
}

function updateWalletBalance() {
    // In a real implementation, this would fetch actual wallet balance
    // For demo purposes, we'll use simulated data
    const balanceElement = document.querySelector('.amount');
    const valueElement = document.querySelector('.value');
    const changeElement = document.querySelector('.change');
    
    if (balanceElement && valueElement && changeElement) {
        // Simulate balance update
        const balance = 1245.78;
        const value = 1029.40;
        const change = 2.5;
        
        balanceElement.textContent = balance.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        valueElement.textContent = `$${value.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
        
        if (change >= 0) {
            changeElement.textContent = `+${change}%`;
            changeElement.className = 'change positive';
        } else {
            changeElement.textContent = `${change}%`;
            changeElement.className = 'change negative';
        }
    }
}

function loadAssets() {
    // In a real implementation, this would fetch actual wallet assets
    console.log("Loading wallet assets...");
}

function loadTransactions() {
    // In a real implementation, this would fetch actual transaction history
    console.log("Loading transaction history...");
}

function initializeCharts() {
    // In a real implementation, this would initialize price charts
    console.log("Initializing charts...");
}

function showSendModal() {
    // Create and show send modal
    createModal('Send ADA', `
        <div class="modal-form">
            <div class="form-group">
                <label for="recipient">Recipient Address</label>
                <input type="text" id="recipient" placeholder="Enter recipient address">
            </div>
            <div class="form-group">
                <label for="amount">Amount (ADA)</label>
                <input type="number" id="amount" placeholder="0.00" step="0.01">
            </div>
            <div class="form-group">
                <label for="fee">Transaction Fee</label>
                <input type="text" id="fee" value="0.17 ADA" readonly>
            </div>
            <button class="submit-btn">Send</button>
        </div>
    `);
}

function showReceiveModal() {
    // Create and show receive modal
    createModal('Receive ADA', `
        <div class="modal-content">
            <p>Share this address to receive payments</p>
            <div class="address-display">
                <code>addr1q9f0asd...fh35</code>
                <button class="copy-btn">Copy</button>
            </div>
            <div class="qr-code">
                <div class="qr-placeholder">QR Code</div>
            </div>
        </div>
    `);
}

function showSwapModal() {
    // Create and show swap modal
    createModal('Swap Assets', `
        <div class="modal-form">
            <div class="form-group">
                <label for="from-asset">From</label>
                <select id="from-asset">
                    <option value="ada">ADA</option>
                    <option value="nex">$CONWAY</option>
                    <option value="eco">MIDNIGHT</option>
                </select>
            </div>
            <div class="form-group">
                <label for="to-asset">To</label>
                <select id="to-asset">
                    <option value="nex">$CONWAY</option>
                    <option value="ada">ADA</option>
                    <option value="eco">MIDNIGHT</option>
                </select>
            </div>
            <div class="form-group">
                <label for="swap-amount">Amount</label>
                <input type="number" id="swap-amount" placeholder="0.00" step="0.01">
            </div>
            <button class="submit-btn">Swap</button>
        </div>
    `);
}

function showTransactionHistory() {
    // Create and show transaction history modal
    createModal('Transaction History', `
        <div class="modal-content">
            <div class="transaction-list">
                <div class="transaction-item">
                    <div class="transaction-info">
                        <div class="transaction-icon sent">
                            <i class="fas fa-arrow-up"></i>
                        </div>
                        <div class="transaction-details">
                            <h4>Sent ADA</h4>
                            <p>To: addr1q9f0asd...fh35</p>
                            <p class="timestamp">2 hours ago</p>
                        </div>
                    </div>
                    <div class="transaction-amount negative">
                        <span class="amount">-25.00 ADA</span>
                        <span class="value">$8.25</span>
                    </div>
                </div>
                
                <div class="transaction-item">
                    <div class="transaction-info">
                        <div class="transaction-icon received">
                            <i class="fas fa-arrow-down"></i>
                        </div>
                        <div class="transaction-details">
                            <h4>Received ADA</h4>
                            <p>From: addr1q8d3f...9hj2</p>
                            <p class="timestamp">1 day ago</p>
                        </div>
                    </div>
                    <div class="transaction-amount positive">
                        <span class="amount">+100.00 ADA</span>
                        <span class="value">$33.00</span>
                    </div>
                </div>
                
                <div class="transaction-item">
                    <div class="transaction-info">
                        <div class="transaction-icon received">
                            <i class="fas fa-coins"></i>
                        </div>
                        <div class="transaction-details">
                            <h4>Staking Reward</h4>
                            <p>Cardano Staking</p>
                            <p class="timestamp">3 days ago</p>
                        </div>
                    </div>
                    <div class="transaction-amount positive">
                        <span class="amount">+2.35 ADA</span>
                        <span class="value">$0.78</span>
                    </div>
                </div>
            </div>
        </div>
    `);
}

function showStakingModal() {
    // Create and show staking modal
    createModal('Cardano Staking', `
        <div class="modal-content">
            <p>Delegate your ADA to earn rewards through staking</p>
            <div class="staking-info">
                <div class="staking-stats">
                    <p>Current APY</p>
                    <span class="amount">4.75%</span>
                </div>
                <div class="staking-stats">
                    <p>Epoch Rewards</p>
                    <span class="amount">2.15 ADA</span>
                </div>
            </div>
            <button class="submit-btn">Manage Staking</button>
        </div>
    `);
}

function showSecurityModal() {
    // Create and show security modal
    createModal('Wallet Security', `
        <div class="modal-content">
            <div class="security-options">
                <div class="security-option">
                    <h4>Two-Factor Authentication</h4>
                    <p>Add an extra layer of security to your wallet</p>
                    <button class="toggle-btn">Enable</button>
                </div>
                <div class="security-option">
                    <h4>Backup Recovery Phrase</h4>
                    <p>Securely store your 24-word recovery phrase</p>
                    <button class="toggle-btn">View</button>
                </div>
                <div class="security-option">
                    <h4>Hardware Wallet</h4>
                    <p>Connect a hardware wallet for maximum security</p>
                    <button class="toggle-btn">Connect</button>
                </div>
            </div>
        </div>
    `);
}

function createModal(title, content) {
    // Remove any existing modal
    const existingModal = document.querySelector('.modal-overlay');
    if (existingModal) {
        existingModal.remove();
    }
    
    // Create modal overlay
    const modalOverlay = document.createElement('div');
    modalOverlay.className = 'modal-overlay';
    
    // Create modal container
    const modalContainer = document.createElement('div');
    modalContainer.className = 'modal-container';
    
    // Create modal header
    const modalHeader = document.createElement('div');
    modalHeader.className = 'modal-header';
    modalHeader.innerHTML = `
        <h3>${title}</h3>
        <button class="close-btn">&times;</button>
    `;
    
    // Create modal body
    const modalBody = document.createElement('div');
    modalBody.className = 'modal-body';
    modalBody.innerHTML = content;
    
    // Assemble modal
    modalContainer.appendChild(modalHeader);
    modalContainer.appendChild(modalBody);
    modalOverlay.appendChild(modalContainer);
    document.body.appendChild(modalOverlay);
    
    // Add event listeners
    const closeBtn = modalOverlay.querySelector('.close-btn');
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            modalOverlay.remove();
        });
    }
    
    // Close modal when clicking outside
    modalOverlay.addEventListener('click', function(e) {
        if (e.target === modalOverlay) {
            modalOverlay.remove();
        }
    });
}

function refreshWalletData() {
    // Show refresh animation
    const refreshBtn = document.querySelector('.icon-btn:first-child');
    if (refreshBtn) {
        refreshBtn.classList.add('rotating');
        setTimeout(() => {
            refreshBtn.classList.remove('rotating');
        }, 1000);
    }
    
    // Refresh data
    updateWalletBalance();
    loadAssets();
    loadTransactions();
    
    console.log("Wallet data refreshed");
}

function startDataSimulation() {
    // Simulate periodic updates (temporarily set to 3s for testing)
    console.log("Starting balance simulation...");
    setInterval(() => {
        console.log("Updating balance simulation...");
        // Update balance with small random changes
        const balanceElement = document.querySelector('.amount');
        const valueElement = document.querySelector('.value');
        const changeElement = document.querySelector('.change');
        
        if (balanceElement && valueElement && changeElement) {
            const currentBalance = parseFloat(balanceElement.textContent.replace(/[^0-9.-]/g, ''));
            const currentValue = parseFloat(valueElement.textContent.replace(/[^0-9.-]/g, ''));
            const currentChange = parseFloat(changeElement.textContent.replace(/[^0-9.-]/g, ''));
            
            // Small random changes
            const balanceChange = (Math.random() - 0.5) * 0.1;
            const newBalance = Math.max(0, currentBalance + balanceChange);
            const newValue = newBalance * 0.33; // Approximate ADA price
            const newChange = currentChange + (Math.random() - 0.5) * 0.1;
            
            balanceElement.textContent = newBalance.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
            valueElement.textContent = `$${newValue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
            
            if (newChange >= 0) {
                changeElement.textContent = `+${newChange.toFixed(2)}%`;
                changeElement.className = 'change positive';
            } else {
                changeElement.textContent = `${newChange.toFixed(2)}%`;
                changeElement.className = 'change negative';
            }
        }
    }, 3000); // Temporarily update every 3 seconds for testing
}

// Add CSS for modals
const modalStyles = document.createElement('style');
modalStyles.textContent = `
    .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.7);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
    }
    
    .modal-container {
        background: var(--secondary-dark);
        border-radius: 20px;
        width: 90%;
        max-width: 500px;
        max-height: 90vh;
        overflow: hidden;
        border: 1px solid var(--border-color);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
    }
    
    .modal-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px;
        border-bottom: 1px solid var(--border-color);
    }
    
    .modal-header h3 {
        font-family: 'Orbitron', sans-serif;
        font-size: 1.4rem;
        margin: 0;
    }
    
    .close-btn {
        background: transparent;
        border: none;
        color: var(--text-primary);
        font-size: 1.5rem;
        cursor: pointer;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s ease;
    }
    
    .close-btn:hover {
        background: var(--hover-bg);
        color: var(--accent-blue);
    }
    
    .modal-body {
        padding: 20px;
        max-height: 70vh;
        overflow-y: auto;
    }
    
    .modal-form .form-group {
        margin-bottom: 20px;
    }
    
    .modal-form label {
        display: block;
        margin-bottom: 8px;
        color: var(--text-secondary);
        font-weight: 500;
    }
    
    .modal-form input, .modal-form select {
        width: 100%;
        background: var(--card-bg);
        border: 1px solid var(--border-color);
        border-radius: 10px;
        padding: 12px 15px;
        color: var(--text-primary);
        font-family: 'Exo 2', sans-serif;
        font-size: 1rem;
    }
    
    .modal-form input:focus, .modal-form select:focus {
        outline: none;
        border-color: var(--accent-blue);
    }
    
    .submit-btn {
        width: 100%;
        background: linear-gradient(90deg, var(--accent-blue), var(--accent-purple));
        color: white;
        border: none;
        padding: 15px;
        border-radius: 30px;
        font-weight: 600;
        font-size: 1rem;
        cursor: pointer;
        transition: all 0.3s ease;
    }
    
    .submit-btn:hover {
        box-shadow: 0 0 20px rgba(189, 0, 255, 0.5);
    }
    
    .address-display {
        display: flex;
        gap: 10px;
        margin: 20px 0;
    }
    
    .address-display code {
        flex: 1;
        background: var(--card-bg);
        padding: 12px 15px;
        border-radius: 10px;
        font-family: monospace;
        font-size: 0.9rem;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    
    .copy-btn {
        background: var(--card-bg);
        border: 1px solid var(--border-color);
        border-radius: 10px;
        padding: 0 20px;
        color: var(--text-primary);
        cursor: pointer;
        transition: all 0.3s ease;
    }
    
    .copy-btn:hover {
        background: var(--hover-bg);
        color: var(--accent-blue);
    }
    
    .qr-placeholder {
        width: 200px;
        height: 200px;
        background: var(--card-bg);
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 20px auto;
        color: var(--text-secondary);
    }
    
    .staking-info {
        display: flex;
        gap: 15px;
        margin: 20px 0;
    }
    
    .staking-stats {
        flex: 1;
        background: var(--card-bg);
        border-radius: 10px;
        padding: 15px;
        text-align: center;
    }
    
    .staking-stats p {
        color: var(--text-secondary);
        margin-bottom: 10px;
    }
    
    .staking-stats .amount {
        font-family: 'Orbitron', sans-serif;
        font-size: 1.2rem;
        display: block;
    }
    
    .security-options {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    
    .security-option {
        background: var(--card-bg);
        border-radius: 10px;
        padding: 20px;
    }
    
    .security-option h4 {
        margin-bottom: 10px;
    }
    
    .security-option p {
        color: var(--text-secondary);
        font-size: 0.9rem;
        margin-bottom: 15px;
    }
    
    .toggle-btn {
        background: var(--hover-bg);
        color: var(--text-primary);
        border: 1px solid var(--border-color);
        padding: 8px 15px;
        border-radius: 30px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
    }
    
    .toggle-btn:hover {
        background: rgba(100, 100, 200, 0.2);
    }
    
    .rotating {
        animation: rotate 1s linear infinite;
    }
    
    @keyframes rotate {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }
`;

document.head.appendChild(modalStyles);

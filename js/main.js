const CORRECT_PASSWORD = 'Ellie';

function init() {
    createParticles();
    
    const input = document.getElementById('passwordInput');
    const btn = document.getElementById('unlockBtn');
    
    // Focus input on load
    setTimeout(() => input.focus(), 100);
    
    // Handle button click
    btn.addEventListener('click', checkPassword);
    
    // Handle Enter key
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') checkPassword();
    });
    
    // Clear error on input
    input.addEventListener('input', () => {
        input.classList.remove('error');
        document.getElementById('errorMsg').classList.remove('show');
    });
}

function createParticles() {
    const container = document.getElementById('particles');
    
    for (let i = 0; i < 20; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        p.style.left = Math.random() * 100 + '%';
        p.style.animationDuration = (Math.random() * 10 + 10) + 's';
        p.style.animationDelay = Math.random() * 15 + 's';
        const size = Math.random() * 4 + 2;
        p.style.width = size + 'px';
        p.style.height = size + 'px';
        container.appendChild(p);
    }
}

function checkPassword() {
    const input = document.getElementById('passwordInput');
    const errorMsg = document.getElementById('errorMsg');
    const value = input.value.trim();
    
    if (value === CORRECT_PASSWORD) {
        // Success - redirect to letter
        window.location.href = 'letter.html';
    } else {
        // Error
        input.classList.add('error');
        errorMsg.classList.add('show');
        input.value = '';
        input.focus();
        
        setTimeout(() => {
            input.classList.remove('error');
        }, 500);
    }
}

// Start when DOM is ready
document.addEventListener('DOMContentLoaded', init);


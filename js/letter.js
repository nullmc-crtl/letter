// Letter content - EDIT THIS
const letterContent = [
    "hi babi",
    "you know mahal na mahal na mahal na mahal kita hihihi, wala man po ginawa ko lang ning website para gumawa ng letter baby, maganda ba??",
    "btw baby, masusunog talaga yan after 60 seconds, kaya go fasterrr HAHAHA. Wala man ngane, gusto ko lang gumawa ng letter po, kase ano. Why not?",
    "babi nag away man po kase tayo :<< ayaw man po, pero opo I know it's just my actions that makes you mad diba po? I promise baby babaguhin po I promise",
    "idk if mababasa mo pa toh, medyo mahaba naman ata, di ko man makita kase ngane nasa raw code ako nag-eedit rn, di ko makita yung mismong text huhuhu sa code lang ako nagbbase",
    "di man ako marunong magcode, nagaaral lang baby ko. Ayy bastaaaa I love you so muchhhh nalang :>> tingnan mo yung sa baba, may kiss"
];

let burnTimer;
let warningTimer;
let isBurning = false;

function init() {
    setDate();
    renderLetter();
    startBurnTimer();
}

function setDate() {
    const date = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('currentDate').textContent = date.toLocaleDateString('en-US', options);
}

function renderLetter() {
    const container = document.getElementById('letterBody');
    
    // Render paragraphs with staggered delays
    letterContent.forEach((text, index) => {
        const p = document.createElement('p');
        p.className = 'letter-paragraph';
        p.textContent = text;
        p.style.animationDelay = (index * 0.5) + 's';
        container.appendChild(p);
    });
    
    // Add signature
    const sig = document.createElement('div');
    sig.className = 'signature';
    sig.style.animationDelay = (letterContent.length * 0.5) + 's';
    sig.innerHTML = `
        <div class="signature-text">Forever yours,</div>
        <div class="signature-name">[Your Name]</div>
    `;
    container.appendChild(sig);
    
    // Add wax seal
    const seal = document.createElement('div');
    seal.className = 'wax-seal';
    seal.textContent = '🌕';
    container.appendChild(seal);
}

function startBurnTimer() {
    // Warning at 45 seconds
    warningTimer = setTimeout(() => {
        if (!isBurning) {
            document.getElementById('burnWarning').classList.add('show');
        }
    }, 45000);

    // Start burning at 60 seconds
    burnTimer = setTimeout(() => {
        if (!isBurning) {
            startBurning();
        }
    }, 60000);
}

function startBurning() {
    isBurning = true;
    const letter = document.getElementById('letter');
    const smoke = document.getElementById('smokeContainer');
    const fire = document.getElementById('fireContainer');
    const warning = document.getElementById('burnWarning');
    const ashesMsg = document.getElementById('ashesMessage');

    // Change warning text
    warning.textContent = "nasunog naaaa";
    
    // Activate effects
    letter.classList.add('burning');
    smoke.classList.add('active');
    fire.classList.add('active');
    
    // Create effects
    createSmoke();
    createFire();
    createAsh();
    
    // Show final message
    setTimeout(() => {
        ashesMsg.classList.add('show');
        warning.classList.remove('show');
    }, 8000);
}

function createSmoke() {
    const container = document.getElementById('smokeContainer');
    const letter = document.getElementById('letter');
    const rect = letter.getBoundingClientRect();
    
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            const smoke = document.createElement('div');
            smoke.className = 'smoke';
            smoke.style.left = (rect.left + Math.random() * rect.width) + 'px';
            smoke.style.top = (rect.top + rect.height * 0.8) + 'px';
            smoke.style.width = (Math.random() * 60 + 40) + 'px';
            smoke.style.height = smoke.style.width;
            container.appendChild(smoke);
            
            setTimeout(() => smoke.remove(), 3000);
        }, i * 200);
    }
}

function createFire() {
    const container = document.getElementById('fireContainer');
    const letter = document.getElementById('letter');
    const rect = letter.getBoundingClientRect();
    
    // Fire around edges
    for (let i = 0; i < 40; i++) {
        setTimeout(() => {
            const fire = document.createElement('div');
            fire.className = 'fire-particle';
            
            // Random position around letter perimeter
            const angle = (Math.random() * Math.PI * 2);
            const radius = 1;
            const x = rect.left + rect.width/2 + Math.cos(angle) * (rect.width/2 + 20);
            const y = rect.top + rect.height/2 + Math.sin(angle) * (rect.height/2 + 20);
            
            fire.style.left = x + 'px';
            fire.style.top = y + 'px';
            container.appendChild(fire);
        }, i * 100);
    }
}

function createAsh() {
    for (let i = 0; i < 25; i++) {
        setTimeout(() => {
            const ash = document.createElement('div');
            ash.className = 'ash';
            ash.style.left = (Math.random() * window.innerWidth) + 'px';
            ash.style.top = '10%';
            ash.style.animationDuration = (Math.random() * 2 + 2) + 's';
            document.body.appendChild(ash);
            
            setTimeout(() => ash.remove(), 4000);
        }, i * 150);
    }
}

// Start when ready
document.addEventListener('DOMContentLoaded', init);


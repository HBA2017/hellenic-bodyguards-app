// Load Member Database from localStorage (updated by admin panel)
function loadMemberDatabase() {
    const storedData = localStorage.getItem('hba_members_data');
    if (storedData) {
        return JSON.parse(storedData);
    }
    // Fallback to default data
    return {
        'HBA-2024-001': {
            password: 'demo123',
            name: 'ΝΙΚΟΛΑΟΣ ΠΑΠΑΔΟΠΟΥΛΟΣ',
            birthdate: '1985-03-15',
            specialty: 'Executive Protection',
            level: 'Level III - Senior',
            joinDate: '2020-01-10',
            expiry: '2027-01-10',
            status: 'active',
            email: 'n.papadopoulos@example.gr',
            phone: '+30 698 765 4321',
            photo: '👤',
            certifications: [
                'Βασική Εκπαίδευση Bodyguard',
                'Πρώτες Βοήθειες',
                'Αμυντική Οδήγηση',
                'Διαχείριση Κρίσεων',
                'Πιστοποίηση VIP Protection'
            ]
        },
        'HBA-2024-002': {
            password: 'demo456',
            name: 'ΜΑΡΙΑ ΓΕΩΡΓΙΟΥ',
            birthdate: '1990-07-22',
            specialty: 'VIP Security',
            level: 'Level II - Professional',
            joinDate: '2021-06-15',
            expiry: '2028-06-15',
            status: 'active',
            email: 'm.georgiou@example.gr',
            phone: '+30 697 123 4567',
            photo: '👤',
            certifications: [
                'Βασική Εκπαίδευση Bodyguard',
                'Πρώτες Βοήθειες',
                'VIP Protocol Training',
                'Defensive Tactics'
            ]
        }
    };
}

let memberDatabase = loadMemberDatabase();

// DOM Elements
const loginScreen = document.getElementById('loginScreen');
const mainScreen = document.getElementById('mainScreen');
const loginForm = document.getElementById('loginForm');
const menuBtn = document.getElementById('menuBtn');
const dropdownMenu = document.getElementById('dropdownMenu');
const logoutBtn = document.getElementById('logoutBtn');
const shareBtn = document.getElementById('shareBtn');

// Current member
let currentMember = null;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Check saved session (auto-login if previously logged in)
    const savedMember = localStorage.getItem('hba_member_id');
    if (savedMember && memberDatabase[savedMember]) {
        showMainScreen(savedMember);
    }

    // Event listeners
    loginForm.addEventListener('submit', handleLogin);
    menuBtn.addEventListener('click', toggleMenu);
    logoutBtn.addEventListener('click', handleLogout);
    shareBtn.addEventListener('click', handleShare);

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!menuBtn.contains(e.target) && !dropdownMenu.contains(e.target)) {
            dropdownMenu.style.display = 'none';
        }
    });

    // Register service worker for PWA
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js').catch(() => {
            console.log('Service worker registration failed');
        });
    }
});

function handleLogin(e) {
    e.preventDefault();
    
    const memberId = document.getElementById('memberId').value.trim().toUpperCase();
    const password = document.getElementById('password').value;

    // Validate
    const member = memberDatabase[memberId];
    
    if (!member) {
        showAlert('❌ Μη έγκυρος αριθμός μέλους');
        return;
    }

    if (member.password !== password) {
        showAlert('❌ Λάθος κωδικός πρόσβασης');
        return;
    }

    // Success
    showMainScreen(memberId);
}

function showMainScreen(memberId) {
    currentMember = memberId;
    localStorage.setItem('hba_member_id', memberId);

    // Hide login, show main
    loginScreen.style.display = 'none';
    mainScreen.style.display = 'flex';

    // Load member data
    loadMemberData(memberId);
}

function loadMemberData(memberId) {
    // Reload database to get latest changes from admin
    memberDatabase = loadMemberDatabase();
    const member = memberDatabase[memberId];

    // Welcome section
    document.getElementById('welcomeName').textContent = member.name.split(' ')[0];
    document.getElementById('memberNumber').textContent = memberId;

    // ID Card
    document.getElementById('photoPlaceholder').textContent = member.photo;
    document.getElementById('fullName').textContent = member.name;
    document.getElementById('idNumber').textContent = memberId;
    document.getElementById('birthDate').textContent = formatDateGreek(member.birthdate);
    document.getElementById('specialty').textContent = member.specialty;
    document.getElementById('level').textContent = member.level;
    document.getElementById('issueDate').textContent = formatDateGreek(member.joinDate);
    document.getElementById('expiryDate').textContent = formatDateGreek(member.expiry);

    // Status
    const statusBadge = document.getElementById('statusBadge');
    if (member.status === 'active') {
        statusBadge.querySelector('.status-text').textContent = 'ΕΝΕΡΓΟ';
    } else {
        statusBadge.querySelector('.status-text').textContent = 'ΑΝΕΝΕΡΓΟ';
        statusBadge.style.background = 'rgba(198, 40, 40, 0.1)';
        statusBadge.style.borderColor = '#c62828';
        statusBadge.querySelector('.status-dot').style.background = '#c62828';
        statusBadge.querySelector('.status-text').style.color = '#c62828';
    }

    // Contact info
    document.getElementById('email').textContent = member.email;
    document.getElementById('phone').textContent = member.phone;

    // Certifications
    if (member.certifications) {
        const certList = document.getElementById('certList');
        certList.innerHTML = '';
        member.certifications.forEach(cert => {
            const li = document.createElement('li');
            li.textContent = cert;
            certList.appendChild(li);
        });
    }

    // Generate QR Code
    generateQRCode(memberId, member);
}

// Helper function to format dates in Greek format
function formatDateGreek(dateString) {
    if (!dateString) return '-';
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}

function generateQRCode(memberId, member) {
    const canvas = document.getElementById('qrCode');
    
    const verificationData = {
        type: 'HBA_MEMBER_ID',
        memberId: memberId,
        name: member.name,
        expiry: member.expiry,
        status: member.status,
        verificationUrl: 'https://hba.gr/verify/' + memberId,
        timestamp: new Date().toISOString()
    };

    QRCode.toCanvas(
        canvas,
        JSON.stringify(verificationData),
        {
            width: 180,
            margin: 1,
            color: {
                dark: '#0033A0',
                light: '#FFFFFF'
            },
            errorCorrectionLevel: 'H'
        },
        (error) => {
            if (error) {
                console.error('QR Error:', error);
            }
        }
    );
}

function toggleMenu() {
    const isVisible = dropdownMenu.style.display === 'block';
    dropdownMenu.style.display = isVisible ? 'none' : 'block';
}

function handleLogout() {
    if (confirm('Θέλετε να αποσυνδεθείτε;')) {
        currentMember = null;
        localStorage.removeItem('hba_member_id');
        
        // Clear forms
        document.getElementById('memberId').value = '';
        document.getElementById('password').value = '';
        
        // Show login
        mainScreen.style.display = 'none';
        loginScreen.style.display = 'flex';
        dropdownMenu.style.display = 'none';
    }
}

function handleShare() {
    // Check if Web Share API is available
    if (navigator.share) {
        navigator.share({
            title: 'HBA Digital ID',
            text: 'Η ψηφιακή μου ταυτότητα HBA',
            url: window.location.href
        }).catch((error) => {
            console.log('Share cancelled', error);
        });
    } else {
        showAlert('ℹ️ Η κοινοποίηση δεν υποστηρίζεται σε αυτή τη συσκευή');
    }
}

function showAlert(message) {
    // Simple alert - can be replaced with custom modal
    alert(message);
}

// Prevent context menu on ID card
document.addEventListener('contextmenu', (e) => {
    if (e.target.closest('.digital-id-card')) {
        e.preventDefault();
    }
});

// Handle online/offline status
window.addEventListener('online', () => {
    console.log('App is online');
});

window.addEventListener('offline', () => {
    console.log('App is offline');
});

// Add to home screen prompt
let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    // You can show install button here
});

// Haptic feedback for buttons (on supported devices)
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        if ('vibrate' in navigator) {
            navigator.vibrate(10);
        }
    });
});

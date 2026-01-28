// Admin Panel JavaScript with LocalStorage (Simple Version)
// For production, replace with backend API calls

// Admin credentials (In production, use proper authentication)
const adminCredentials = {
    username: 'admin',
    password: 'admin123'
};

// Members data storage key
const STORAGE_KEY = 'hba_members_data';

// Initialize members data
let membersData = loadMembersData();

// DOM Elements
const adminLogin = document.getElementById('adminLogin');
const adminDashboard = document.getElementById('adminDashboard');
const adminLoginForm = document.getElementById('adminLoginForm');
const adminLogout = document.getElementById('adminLogout');
const btnAddMember = document.getElementById('btnAddMember');
const btnExport = document.getElementById('btnExport');
const btnImport = document.getElementById('btnImport');
const importFile = document.getElementById('importFile');
const searchInput = document.getElementById('searchInput');
const filterStatus = document.getElementById('filterStatus');
const memberModal = document.getElementById('memberModal');
const closeModal = document.getElementById('closeModal');
const cancelModal = document.getElementById('cancelModal');
const memberForm = document.getElementById('memberForm');
const membersTableBody = document.getElementById('membersTableBody');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Check if admin is logged in
    const isLoggedIn = sessionStorage.getItem('admin_logged_in');
    if (isLoggedIn) {
        showDashboard();
    }

    // Event Listeners
    adminLoginForm.addEventListener('submit', handleAdminLogin);
    adminLogout.addEventListener('click', handleAdminLogout);
    btnAddMember.addEventListener('click', () => openMemberModal());
    btnExport.addEventListener('click', exportData);
    btnImport.addEventListener('click', () => importFile.click());
    importFile.addEventListener('change', importData);
    closeModal.addEventListener('click', closeMemberModal);
    cancelModal.addEventListener('click', closeMemberModal);
    memberForm.addEventListener('submit', saveMember);
    searchInput.addEventListener('input', filterMembers);
    filterStatus.addEventListener('change', filterMembers);

    // Close modal on outside click
    memberModal.addEventListener('click', (e) => {
        if (e.target === memberModal) {
            closeMemberModal();
        }
    });
});

// Load members from localStorage
function loadMembersData() {
    const data = localStorage.getItem(STORAGE_KEY);
    if (data) {
        return JSON.parse(data);
    }
    // Default demo data
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
                'Διαχείριση Κρίσεων'
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
                'VIP Protocol Training'
            ]
        }
    };
}

// Save members to localStorage
function saveMembersData() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(membersData));
}

// Admin Login
function handleAdminLogin(e) {
    e.preventDefault();
    const username = document.getElementById('adminUsername').value;
    const password = document.getElementById('adminPassword').value;

    if (username === adminCredentials.username && password === adminCredentials.password) {
        sessionStorage.setItem('admin_logged_in', 'true');
        showDashboard();
    } else {
        alert('❌ Λάθος στοιχεία σύνδεσης!');
    }
}

// Show Dashboard
function showDashboard() {
    adminLogin.style.display = 'none';
    adminDashboard.style.display = 'block';
    updateStats();
    renderMembersTable();
}

// Admin Logout
function handleAdminLogout() {
    if (confirm('Είστε σίγουροι ότι θέλετε να αποσυνδεθείτε;')) {
        sessionStorage.removeItem('admin_logged_in');
        adminDashboard.style.display = 'none';
        adminLogin.style.display = 'flex';
    }
}

// Update Statistics
function updateStats() {
    const members = Object.values(membersData);
    const totalMembers = members.length;
    const activeMembers = members.filter(m => m.status === 'active').length;
    const pendingMembers = members.filter(m => m.status === 'pending').length;
    const totalCerts = members.reduce((sum, m) => sum + (m.certifications?.length || 0), 0);

    document.getElementById('totalMembers').textContent = totalMembers;
    document.getElementById('activeMembers').textContent = activeMembers;
    document.getElementById('pendingMembers').textContent = pendingMembers;
    document.getElementById('totalCerts').textContent = totalCerts;
}

// Render Members Table
function renderMembersTable(filter = '') {
    const members = Object.entries(membersData);
    let filteredMembers = members;

    // Apply search filter
    if (filter) {
        const searchTerm = filter.toLowerCase();
        filteredMembers = members.filter(([id, member]) => {
            return id.toLowerCase().includes(searchTerm) ||
                   member.name.toLowerCase().includes(searchTerm) ||
                   member.email.toLowerCase().includes(searchTerm);
        });
    }

    // Apply status filter
    const statusFilter = filterStatus.value;
    if (statusFilter !== 'all') {
        filteredMembers = filteredMembers.filter(([_, member]) => member.status === statusFilter);
    }

    membersTableBody.innerHTML = '';

    if (filteredMembers.length === 0) {
        membersTableBody.innerHTML = `
            <tr>
                <td colspan="8" style="text-align: center; padding: 3rem;">
                    <div class="empty-state">
                        <div class="empty-state-icon">📭</div>
                        <h3>Δεν βρέθηκαν μέλη</h3>
                        <p>Δοκιμάστε διαφορετικά κριτήρια αναζήτησης</p>
                    </div>
                </td>
            </tr>
        `;
        return;
    }

    filteredMembers.forEach(([memberId, member]) => {
        const row = document.createElement('tr');
        const statusClass = `status-${member.status}`;
        const statusText = member.status === 'active' ? 'Ενεργό' : 
                          member.status === 'inactive' ? 'Ανενεργό' : 'Σε Αναμονή';

        row.innerHTML = `
            <td><strong>${memberId}</strong></td>
            <td>${member.name}</td>
            <td>${member.email}</td>
            <td>${member.phone}</td>
            <td>${member.specialty}</td>
            <td><span class="status-badge ${statusClass}">${statusText}</span></td>
            <td>${formatDate(member.expiry)}</td>
            <td>
                <div class="action-buttons">
                    <button class="btn-icon btn-edit" onclick="editMember('${memberId}')" title="Επεξεργασία">✏️</button>
                    <button class="btn-icon btn-delete" onclick="deleteMember('${memberId}')" title="Διαγραφή">🗑️</button>
                </div>
            </td>
        `;
        membersTableBody.appendChild(row);
    });
}

// Filter Members
function filterMembers() {
    const searchTerm = searchInput.value;
    renderMembersTable(searchTerm);
}

// Open Member Modal
function openMemberModal(memberId = null) {
    const modalTitle = document.getElementById('modalTitle');
    
    if (memberId) {
        // Edit mode
        modalTitle.textContent = 'Επεξεργασία Μέλους';
        const member = membersData[memberId];
        document.getElementById('editMemberId').value = memberId;
        document.getElementById('memberId').value = memberId;
        document.getElementById('memberId').disabled = true;
        document.getElementById('memberPassword').value = member.password;
        document.getElementById('memberName').value = member.name;
        document.getElementById('memberBirthdate').value = member.birthdate;
        document.getElementById('memberEmail').value = member.email;
        document.getElementById('memberPhone').value = member.phone;
        document.getElementById('memberSpecialty').value = member.specialty;
        document.getElementById('memberLevel').value = member.level;
        document.getElementById('memberJoinDate').value = member.joinDate;
        document.getElementById('memberExpiry').value = member.expiry;
        document.getElementById('memberStatus').value = member.status;
        document.getElementById('memberPhoto').value = member.photo;
        document.getElementById('memberCertifications').value = member.certifications?.join('\n') || '';
    } else {
        // Add mode
        modalTitle.textContent = 'Νέο Μέλος';
        memberForm.reset();
        document.getElementById('editMemberId').value = '';
        document.getElementById('memberId').disabled = false;
        document.getElementById('memberPhoto').value = '👤';
        
        // Set default dates
        const today = new Date().toISOString().split('T')[0];
        const futureDate = new Date();
        futureDate.setFullYear(futureDate.getFullYear() + 7);
        document.getElementById('memberJoinDate').value = today;
        document.getElementById('memberExpiry').value = futureDate.toISOString().split('T')[0];
    }

    memberModal.style.display = 'flex';
}

// Close Member Modal
function closeMemberModal() {
    memberModal.style.display = 'none';
    memberForm.reset();
}

// Save Member
function saveMember(e) {
    e.preventDefault();

    const memberId = document.getElementById('memberId').value.trim().toUpperCase();
    const editingId = document.getElementById('editMemberId').value;

    // Check if ID already exists (only for new members)
    if (!editingId && membersData[memberId]) {
        alert('❌ Ο αριθμός μέλους υπάρχει ήδη!');
        return;
    }

    const certText = document.getElementById('memberCertifications').value;
    const certifications = certText ? certText.split('\n').filter(c => c.trim()) : [];

    const memberData = {
        password: document.getElementById('memberPassword').value,
        name: document.getElementById('memberName').value.toUpperCase(),
        birthdate: document.getElementById('memberBirthdate').value,
        email: document.getElementById('memberEmail').value,
        phone: document.getElementById('memberPhone').value,
        specialty: document.getElementById('memberSpecialty').value,
        level: document.getElementById('memberLevel').value,
        joinDate: document.getElementById('memberJoinDate').value,
        expiry: document.getElementById('memberExpiry').value,
        status: document.getElementById('memberStatus').value,
        photo: document.getElementById('memberPhoto').value || '👤',
        certifications: certifications
    };

    // If editing, remove old entry if ID changed
    if (editingId && editingId !== memberId) {
        delete membersData[editingId];
    }

    membersData[memberId] = memberData;
    saveMembersData();
    
    closeMemberModal();
    updateStats();
    renderMembersTable();
    
    alert('✅ Το μέλος αποθηκεύτηκε επιτυχώς!');
}

// Edit Member (global function for onclick)
window.editMember = function(memberId) {
    openMemberModal(memberId);
};

// Delete Member (global function for onclick)
window.deleteMember = function(memberId) {
    if (confirm(`Είστε σίγουροι ότι θέλετε να διαγράψετε το μέλος ${memberId};`)) {
        delete membersData[memberId];
        saveMembersData();
        updateStats();
        renderMembersTable();
        alert('✅ Το μέλος διαγράφηκε!');
    }
};

// Export Data
function exportData() {
    const dataStr = JSON.stringify(membersData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `hba-members-${new Date().toISOString().split('T')[0]}.json`;
    link.click();
    URL.revokeObjectURL(url);
    alert('✅ Τα δεδομένα εξήχθησαν επιτυχώς!');
}

// Import Data
function importData(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(event) {
        try {
            const importedData = JSON.parse(event.target.result);
            if (confirm('Θέλετε να αντικαταστήσετε όλα τα υπάρχοντα δεδομένα;')) {
                membersData = importedData;
                saveMembersData();
                updateStats();
                renderMembersTable();
                alert('✅ Τα δεδομένα εισήχθησαν επιτυχώς!');
            }
        } catch (error) {
            alert('❌ Σφάλμα κατά την εισαγωγή δεδομένων!');
        }
    };
    reader.readAsText(file);
    importFile.value = '';
}

// Format Date
function formatDate(dateString) {
    if (!dateString) return '-';
    const date = new Date(dateString);
    return date.toLocaleDateString('el-GR');
}

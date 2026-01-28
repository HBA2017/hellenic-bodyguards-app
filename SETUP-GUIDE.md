# 🚀 Οδηγός Εγκατάστασης & Χρήσης
## Hellenic Bodyguards Association - Digital ID System

---

## 📋 Περιεχόμενα

1. [Τι Περιλαμβάνει το Σύστημα](#τι-περιλαμβάνει-το-σύστημα)
2. [Γρήγορη Εκκίνηση (Τοπικά)](#γρήγορη-εκκίνηση-τοπικά)
3. [Πώς Χρησιμοποιείται](#πώς-χρησιμοποιείται)
4. [Deployment Online](#deployment-online)
5. [Για Production](#για-production)

---

## 🎯 Τι Περιλαμβάνει το Σύστημα

### 📱 **Member App** (`index.html`)
- Εφαρμογή για τα μέλη
- Ψηφιακή ταυτότητα
- QR Code επαλήθευσης
- Mobile-first design
- PWA support (εγκατάσταση σε κινητό)

### 🔐 **Admin Panel** (`admin.html`)
- Διαχείριση μελών
- Προσθήκη/Επεξεργασία/Διαγραφή
- Στατιστικά
- Export/Import δεδομένων
- Αναζήτηση & φιλτράρισμα

---

## 🚀 Γρήγορη Εκκίνηση (Τοπικά)

### Βήμα 1: Έλεγχος Αρχείων

Βεβαιωθείτε ότι έχετε:
```
hellenic-bodyguard-app/
├── index.html          ← Member App
├── admin.html         ← Admin Panel
├── styles.css         ← Member Styles
├── admin-styles.css   ← Admin Styles
├── app.js            ← Member Logic
├── admin.js          ← Admin Logic
├── manifest.json     ← PWA Config
├── sw.js            ← Service Worker
└── README.md        ← Documentation
```

### Βήμα 2: Άνοιγμα Admin Panel

1. **Ανοίξτε το `admin.html` στον browser**
   ```
   Δεξί κλικ → Άνοιγμα με Chrome/Edge/Firefox
   ```

2. **Συνδεθείτε**
   ```
   Username: admin
   Password: admin123
   ```

### Βήμα 3: Διαχείριση Μελών

#### Προσθήκη Νέου Μέλους:
1. Κλικ στο **"➕ Νέο Μέλος"**
2. Συμπληρώστε τη φόρμα:
   - **Αριθμός Μέλους**: π.χ. `HBA-2024-003`
   - **Κωδικός**: Ο κωδικός που θα χρησιμοποιεί το μέλος
   - **Ονοματεπώνυμο**: ΚΕΦΑΛΑΙΑ ΓΡΑΜΜΑΤΑ
   - **Email, Τηλέφωνο, κλπ**
3. Κλικ **"Αποθήκευση"**

#### Επεξεργασία Μέλους:
1. Στον πίνακα μελών, κλικ στο **✏️**
2. Αλλάξτε ό,τι θέλετε
3. **Αποθήκευση**

#### Διαγραφή Μέλους:
1. Κλικ στο **🗑️**
2. Επιβεβαίωση

### Βήμα 4: Δοκιμή Member App

1. **Ανοίξτε το `index.html`** (η κύρια εφαρμογή)
2. **Συνδεθείτε με τα στοιχεία μέλους**:
   ```
   Αριθμός: HBA-2024-001
   Κωδικός: demo123
   ```
3. **Θα δείτε την ψηφιακή ταυτότητα!** ✅

---

## 💡 Πώς Χρησιμοποιείται

### 📝 Για τον Διαχειριστή:

1. **Καθημερινή Χρήση**:
   - Ανοίγετε το `admin.html`
   - Προσθέτετε νέα μέλη
   - Ενημερώνετε στοιχεία
   - Παρακολουθείτε στατιστικά

2. **Export Δεδομένων** (Backup):
   - Κλικ **"📥 Export Data"**
   - Αποθηκεύεται JSON αρχείο
   - Κρατήστε το ως backup!

3. **Import Δεδομένων**:
   - Κλικ **"📤 Import Data"**
   - Επιλέξτε JSON αρχείο
   - Επιβεβαίωση

### 📱 Για τα Μέλη:

#### Στον Υπολογιστή:
1. Ανοίγουν το `index.html`
2. Βάζουν τα στοιχεία τους
3. Βλέπουν την ταυτότητα

#### Στο Κινητό (Καλύτερα!):

**Επιλογή A: Τοπικό Δίκτυο**

1. Στον υπολογιστή, τρέξτε:
   ```bash
   cd hellenic-bodyguard-app
   python -m http.server 8000
   ```

2. Βρείτε το IP του υπολογιστή:
   - Windows: `ipconfig` (IPv4 Address)
   - Mac/Linux: `ifconfig` ή `ip addr`
   - Π.χ: `192.168.1.100`

3. Στο κινητό, ανοίξτε:
   ```
   http://192.168.1.100:8000
   ```

4. **Εγκατάσταση ως App**:
   - **iPhone**: Safari → Share → Add to Home Screen
   - **Android**: Chrome → Menu → Add to Home screen

**Επιλογή B: Online (Βλ. παρακάτω)**

---

## 🌐 Deployment Online

### Επιλογή 1: GitHub Pages (ΔΩΡΕΑΝ)

1. **Δημιουργία GitHub Account**:
   - Πηγαίνετε στο https://github.com
   - Sign up (δωρεάν)

2. **Δημιουργία Repository**:
   - New Repository
   - Όνομα: `hba-digital-id`
   - Public
   - Create

3. **Upload Αρχείων**:
   - Upload files
   - Σύρετε όλα τα αρχεία
   - Commit

4. **Ενεργοποίηση GitHub Pages**:
   - Settings → Pages
   - Source: main branch
   - Save

5. **Το link σας**:
   ```
   https://your-username.github.io/hba-digital-id/
   ```

**Member App**: `https://your-username.github.io/hba-digital-id/`
**Admin Panel**: `https://your-username.github.io/hba-digital-id/admin.html`

### Επιλογή 2: Netlify (ΔΩΡΕΑΝ)

1. Πηγαίνετε στο https://netlify.com
2. Sign up (δωρεάν)
3. Drag & Drop τον φάκελο `hellenic-bodyguard-app`
4. Παίρνετε link: `https://your-site.netlify.app`

### Επιλογή 3: Vercel (ΔΩΡΕΑΝ)

1. https://vercel.com
2. Import Project
3. Deploy
4. Link: `https://your-site.vercel.app`

---

## 🔒 Για Production (Σοβαρή Χρήση)

### ⚠️ Προειδοποίηση

Αυτή η έκδοση χρησιμοποιεί **localStorage** (αποθήκευση στον browser).

**Μειονεκτήματα**:
- ❌ Δεδομένα μόνο στον υπολογιστή
- ❌ Όχι πραγματική ασφάλεια
- ❌ Δεν συγχρονίζονται συσκευές

### ✅ Για Επαγγελματική Χρήση Χρειάζεστε:

#### 1. Backend Server
```
Node.js + Express
ή
PHP + Laravel
ή
Python + Django
```

#### 2. Database
```
MySQL
ή
PostgreSQL
ή
MongoDB
```

#### 3. API Endpoints
```javascript
POST   /api/auth/login          // Σύνδεση
GET    /api/members/:id         // Πληροφορίες μέλους
POST   /api/admin/members       // Προσθήκη μέλους
PUT    /api/admin/members/:id   // Ενημέρωση
DELETE /api/admin/members/:id   // Διαγραφή
```

#### 4. Ασφάλεια
- ✅ HTTPS (SSL Certificate)
- ✅ Password Hashing (bcrypt)
- ✅ JWT Tokens
- ✅ Rate Limiting
- ✅ Input Validation
- ✅ SQL Injection Protection

---

## 📞 Επόμενα Βήματα

### Για Απλή Χρήση (Demo/Testing):
✅ Χρησιμοποιήστε την τρέχουσα έκδοση
✅ Admin Panel για διαχείριση
✅ LocalStorage για δεδομένα

### Για Πραγματική Χρήση:
📧 **Χρειάζεστε Developer** για:
- Backend API
- Database setup
- Security implementation
- Server hosting
- Maintenance

---

## 🆘 Συχνές Ερωτήσεις

### Q: Πώς βλέπουν τα μέλη την ταυτότητα στο κινητό τους;

**A**: Τρεις τρόποι:

1. **Τοπικό Δίκτυο** (εύκολο):
   - Τρέξτε local server
   - Μέλη συνδέονται στο IP σας

2. **Online** (προτείνεται):
   - Deploy σε GitHub Pages/Netlify
   - Στείλτε το link στα μέλη

3. **USB/Email**:
   - Στείλτε τα αρχεία
   - Ανοίγουν το index.html

### Q: Πώς δίνω κωδικούς στα μέλη;

**A**: 
1. Admin Panel → Προσθέτετε μέλος
2. Ορίζετε κωδικό
3. Στέλνετε Email/SMS:
   ```
   Ο αριθμός σας: HBA-2024-XXX
   Ο κωδικός σας: XXXXXX
   Link: https://your-site.com
   ```

### Q: Μπορώ να αλλάξω το design;

**A**: Ναι! Επεξεργαστείτε:
- `styles.css` - για Member App
- `admin-styles.css` - για Admin Panel

### Q: Χάθηκαν τα δεδομένα!

**A**: 
- Τα δεδομένα είναι στο localStorage του browser
- Αν σβήσετε cookies/cache, χάνονται
- **Λύση**: Κάντε Export συχνά!
- **Καλύτερη λύση**: Χρήστε backend

### Q: Πόσα μέλη μπορώ να προσθέσω;

**A**: 
- LocalStorage: ~5-10MB (χιλιάδες μέλη)
- Για πολλά μέλη → Backend

---

## 🎓 Tutorial: Πρώτη Χρήση

### 1. Ανοίξτε Admin Panel
```
admin.html → admin / admin123
```

### 2. Προσθέστε Ένα Μέλος
```
Αριθμός: HBA-2024-010
Κωδικός: test123
Όνομα: ΔΗΜΗΤΡΗΣ ΚΩΝΣΤΑΝΤΙΝΟΥ
Email: test@example.gr
... κλπ
```

### 3. Ανοίξτε Member App
```
index.html
```

### 4. Συνδεθείτε
```
HBA-2024-010 / test123
```

### 5. Δείτε την Ταυτότητα! 🎉

---

## 📚 Πόροι

- **Demo Member**: HBA-2024-001 / demo123
- **Demo Admin**: admin / admin123
- **Support**: info@hellenicbodyguard.gr

---

## ✅ Checklist Deployment

- [ ] Δοκιμάστε τοπικά
- [ ] Προσθέστε πραγματικά μέλη
- [ ] Export backup
- [ ] Deploy online (GitHub Pages)
- [ ] Δοκιμάστε από κινητό
- [ ] Στείλτε link & οδηγίες σε μέλη
- [ ] Κάντε τακτικά backups

---

**Καλή επιτυχία! 🛡️**

*Για περισσότερη βοήθεια, διαβάστε το README.md*

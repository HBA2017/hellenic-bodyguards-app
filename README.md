# 🛡️ Hellenic Bodyguards Association - Ψηφιακή Ταυτότητα

Μια mobile-first Progressive Web App (PWA) για την ψηφιακή ταυτότητα μελών του συλλόγου Hellenic Bodyguards Association, εμπνευσμένη από την κυβερνητική εφαρμογή **Ψηφιακός Πολίτης (gov.gr)**.

## 📱 Χαρακτηριστικά

### ✨ Κύρια Features
- 🎯 **Mobile-First Design** - Βελτιστοποιημένη για smartphones
- 📇 **Ψηφιακή Ταυτότητα** - Σχεδιασμένη όπως η gov.gr ID
- 📱 **QR Code** - Αυτόματη δημιουργία για επαλήθευση
- 🔐 **Ασφαλής Σύνδεση** - Authentication system
- 💾 **Offline Support** - Λειτουργεί χωρίς internet (PWA)
- 🏠 **Installable** - Εγκατάσταση στην αρχική οθόνη
- 🖨️ **Print Ready** - Εκτύπωση ταυτότητας
- 📤 **Share API** - Κοινοποίηση μέσω mobile apps

### 🎨 UI/UX Features
- **Gov.gr Inspired Design** - Ίδιο look & feel με την κυβερνητική εφαρμογή
- **Bottom Navigation** - Native mobile navigation
- **Smooth Animations** - Fluid transitions
- **Touch Optimized** - Perfect for touchscreens
- **Haptic Feedback** - Vibration on button press
- **Portrait Lock Warning** - Για καλύτερη εμπειρία

## 🚀 Γρήγορη Εκκίνηση

### Άνοιγμα στο Κινητό

#### Μέθοδος 1: Απευθείας από τον φάκελο
1. Ανοίξτε το αρχείο `index.html` στο κινητό σας
2. Χρησιμοποιήστε Chrome, Safari ή άλλο σύγχρονο browser

#### Μέθοδος 2: Τοπικός Server (Προτείνεται)
```bash
# Με Python
cd hellenic-bodyguard-app
python -m http.server 8000

# Με Node.js (npx http-server)
npx http-server -p 8000

# Με PHP
php -S localhost:8000
```

Στη συνέχεια στο κινητό σας:
1. Βρείτε το local IP του υπολογιστή σας (π.χ. 192.168.1.100)
2. Ανοίξτε: `http://192.168.1.100:8000`

### 📲 Εγκατάσταση ως App

#### iOS (iPhone/iPad)
1. Ανοίξτε στο Safari
2. Πατήστε το κουμπί Share (📤)
3. Επιλέξτε "Add to Home Screen"
4. Πατήστε "Add"

#### Android
1. Ανοίξτε στο Chrome
2. Πατήστε το menu (⋮)
3. Επιλέξτε "Add to Home screen" ή "Install app"
4. Πατήστε "Install"

## 🔑 Demo Credentials

**Μέλος 1:**
```
Αριθμός: HBA-2024-001
Κωδικός: demo123
```

**Μέλος 2:**
```
Αριθμός: HBA-2024-002
Κωδικός: demo456
```

## 📁 Δομή Project

```
hellenic-bodyguard-app/
├── index.html          # Main HTML (Mobile-optimized)
├── styles.css          # Gov.gr inspired styling
├── app.js             # Application logic + PWA
├── manifest.json      # PWA manifest
├── sw.js             # Service Worker (offline support)
└── README.md         # Documentation
```

## 🎯 Πώς Λειτουργεί

### 1. Login Screen
- Μπλε gradient background (όπως gov.gr)
- Εισαγωγή αριθμού μέλους & κωδικού
- Smooth animations

### 2. Main Screen
- **Top Bar**: App title & menu
- **Welcome Card**: Όνομα χρήστη & αριθμός μέλους
- **Digital ID Card**: 
  - Header με logo & όνομα οργανισμού
  - Φωτογραφία μέλους
  - Πλήρη στοιχεία (όνομα, γέννηση, ειδικότητα, κλπ)
  - Status badge (Ενεργό/Ανενεργό)
  - QR Code για επαλήθευση
  - Security badge
- **Action Buttons**: Εκτύπωση & Κοινοποίηση
- **Info Cards**: Πιστοποιήσεις & Επικοινωνία
- **Bottom Navigation**: Αρχική, Έγγραφα, Ρυθμίσεις

### 3. PWA Features
- Offline λειτουργία
- Installable app
- Fast loading με caching
- Native-like experience

## 🔧 Προσαρμογή

### Προσθήκη Νέων Μελών

Επεξεργαστείτε το `app.js`:

```javascript
'HBA-2024-XXX': {
    password: 'your_password',
    name: 'ΟΝΟΜΑΤΕΠΩΝΥΜΟ',
    birthdate: 'ΗΗ/ΜΜ/ΕΕΕΕ',
    specialty: 'Executive Protection',
    level: 'Level III - Senior',
    joinDate: 'ΗΗ/ΜΜ/ΕΕΕΕ',
    expiry: 'ΗΗ/ΜΜ/ΕΕΕΕ',
    status: 'active', // ή 'inactive'
    email: 'email@example.gr',
    phone: '+30 XXX XXX XXXX',
    photo: '👤', // ή URL πραγματικής φωτογραφίας
    certifications: ['Cert 1', 'Cert 2', ...]
}
```

### Αλλαγή Χρωμάτων

Στο `styles.css`:

```css
:root {
    --primary-blue: #0033A0;    /* Κύριο μπλε */
    --light-blue: #0066CC;      /* Ανοιχτό μπλε */
    --dark-blue: #002366;       /* Σκούρο μπλε */
    --success-green: #00A651;   /* Πράσινο (ενεργό) */
}
```

### Προσθήκη Logo

Αντικαταστήστε τα emoji (🛡️) με εικόνες:

```html
<!-- Στο index.html -->
<img src="logo.png" alt="HBA Logo" class="logo">
```

### Προσθήκη Πραγματικών Εικόνων

Δημιουργήστε τα icons:
- `icon-192.png` (192x192px)
- `icon-512.png` (512x512px)

## 🔐 Ασφάλεια

⚠️ **Σημαντικό**: Αυτή η έκδοση είναι για **demo/testing**.

### Για Production:

1. **Backend API**
   - Μετακίνηση δεδομένων σε server
   - RESTful API endpoints
   - Database (PostgreSQL, MySQL)

2. **Authentication**
   - JWT tokens
   - OAuth2
   - Session management
   - Password hashing (bcrypt/argon2)

3. **HTTPS**
   - SSL certificate
   - Secure connections only

4. **Security Headers**
   - CORS policy
   - CSP (Content Security Policy)
   - XSS protection

5. **Rate Limiting**
   - Prevent brute force
   - API throttling

## 📱 Browser Support

### Mobile
- ✅ Chrome (Android) 90+
- ✅ Safari (iOS) 14+
- ✅ Samsung Internet 15+
- ✅ Firefox Mobile 90+

### Desktop (for testing)
- ✅ Chrome 90+
- ✅ Edge 90+
- ✅ Safari 14+
- ✅ Firefox 90+

## 🎨 Design Specifications

### Colors (Gov.gr inspired)
- Primary Blue: `#0033A0`
- Light Blue: `#0066CC`
- Dark Blue: `#002366`
- Success Green: `#00A651`

### Typography
- System fonts (native look)
- iOS: San Francisco
- Android: Roboto

### Layout
- Max width: 480px (mobile optimized)
- Padding: 16px
- Border radius: 12-16px
- Shadows: Subtle elevation

## 🚀 Μελλοντικές Βελτιώσεις

### Phase 1 (MVP) ✅
- [x] Mobile-first design
- [x] Gov.gr style ID card
- [x] QR code generation
- [x] PWA support
- [x] Offline functionality

### Phase 2 (Upcoming)
- [ ] Backend API integration
- [ ] Real database
- [ ] Photo upload
- [ ] Biometric authentication (Face ID/Fingerprint)
- [ ] Push notifications
- [ ] Multi-language (ΕΛ/EN)

### Phase 3 (Advanced)
- [ ] NFC support
- [ ] Blockchain verification
- [ ] Event management
- [ ] Document storage
- [ ] Chat/Support
- [ ] Dark mode
- [ ] Accessibility improvements

## 🛠️ Τεχνολογίες

- **HTML5** - Semantic markup
- **CSS3** - Modern styling, Grid, Flexbox
- **JavaScript (ES6+)** - Vanilla JS, no frameworks
- **PWA** - Service Worker, Manifest
- **QRCode.js** - QR generation
- **LocalStorage** - Session persistence
- **Web Share API** - Native sharing
- **Canvas API** - QR rendering

## 📄 License

Ελεύθερο για χρήση από τον **Hellenic Bodyguards Association**.

## 🤝 Support & Contact

- **Email**: info@hellenicbodyguard.gr
- **Website**: www.hellenicbodyguard.gr
- **Phone**: +30 XXX XXX XXXX

## 📝 Notes

### Development Tips
- Test στο πραγματικό κινητό, όχι μόνο emulator
- Χρησιμοποιήστε Chrome DevTools για mobile debugging
- Enable "Remote Debugging" για Android
- Safari Web Inspector για iOS

### Performance
- Lightweight (< 50KB total)
- Fast loading (< 1s)
- Smooth 60fps animations
- Optimized images

### Best Practices
- Semantic HTML
- Accessible (ARIA labels)
- SEO friendly
- Progressive enhancement

---

**Developed with ❤️ for Hellenic Bodyguards Association**

*Inspired by gov.gr Ψηφιακός Πολίτης*

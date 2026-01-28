# 🎨 Οδηγίες Προσθήκης Logo HBA

## Βήμα 1: Λήψη Logo από τη Σελίδα HBA

### Μέθοδος A: Από το www.hba.com.gr

1. **Επισκεφθείτε** το www.hba.com.gr
2. **Δεξί κλικ** στο logo
3. **"Save image as..."** ή **"Αποθήκευση εικόνας ως..."**
4. Αποθηκεύστε ως: `hba-logo.png`

### Μέθοδος B: Ζήτηση από HBA

Επικοινωνήστε με τη HBA για το επίσημο logo:
- Email: info@hba.com.gr
- Ζητήστε: "Logo σε υψηλή ανάλυση για ψηφιακή ταυτότητα"
- Προτιμήστε: PNG με διαφανές background

---

## Βήμα 2: Τοποθέτηση Logo στην Εφαρμογή

### Αντιγράψτε το logo στον φάκελο:
```
hellenic-bodyguard-app/
├── hba-logo.png          ← Βάλτε το logo εδώ
├── hba-logo-white.png    ← Λευκή έκδοση (αν υπάρχει)
├── index.html
└── ...
```

---

## Βήμα 3: Ενημέρωση HTML

### Για το index.html (Member App):

**Βρείτε (γραμμή ~22):**
```html
<div class="logo-large">🛡️</div>
```

**Αντικαταστήστε με:**
```html
<img src="hba-logo.png" alt="HBA Logo" class="logo-large-img">
```

**Βρείτε (γραμμή ~50):**
```html
<div class="card-emblem">🛡️</div>
```

**Αντικαταστήστε με:**
```html
<img src="hba-logo-white.png" alt="HBA" class="card-emblem-img">
```

### Για το admin.html (Admin Panel):

**Βρείτε (γραμμή ~18):**
```html
<div class="admin-icon">🔐</div>
```

**Αντικαταστήστε με:**
```html
<img src="hba-logo.png" alt="HBA Logo" class="admin-logo">
```

---

## Βήμα 4: Ενημέρωση CSS

### Για το styles.css (Member App):

**Προσθέστε στο τέλος του αρχείου:**

```css
/* Logo Images */
.logo-large-img {
    width: 120px;
    height: auto;
    margin-bottom: 1rem;
}

.card-emblem-img {
    width: 60px;
    height: auto;
    filter: brightness(0) invert(1); /* Κάνει το logo λευκό */
}

.logo-icon img {
    width: 40px;
    height: auto;
}
```

### Για το admin-styles.css (Admin Panel):

**Προσθέστε στο τέλος:**

```css
/* Admin Logo */
.admin-logo {
    width: 100px;
    height: auto;
    margin-bottom: 1rem;
}
```

---

## Βήμα 5: Χρώματα HBA (Προαιρετικό)

Αν θέλετε να αλλάξετε τα χρώματα της εφαρμογής:

### Στο styles.css:

**Βρείτε (γραμμές ~1-9):**
```css
:root {
    --primary-blue: #0033A0;
    --light-blue: #0066CC;
    --dark-blue: #002366;
    ...
}
```

### Επιλογές Χρωμάτων:

#### Α. Κλασική HBA (Μαύρο/Χρυσό):
```css
:root {
    --primary-blue: #1C1C1C;      /* Μαύρο */
    --light-blue: #D4AF37;        /* Χρυσό */
    --dark-blue: #000000;         /* Βαθύ μαύρο */
    --success-green: #00A651;     /* Πράσινο */
}
```

#### Β. Professional Security (Μπλε Σκούρο/Ασημί):
```css
:root {
    --primary-blue: #1A2332;      /* Navy Blue */
    --light-blue: #2C4058;        /* Steel Blue */
    --dark-blue: #0F1419;         /* Dark Navy */
    --success-green: #00A651;
}
```

#### Γ. Executive (Μπορντό/Χρυσό):
```css
:root {
    --primary-blue: #8B0000;      /* Dark Red */
    --light-blue: #B8860B;        /* Dark Gold */
    --dark-blue: #5C0000;         /* Deep Red */
    --success-green: #00A651;
}
```

---

## Βήμα 6: Favicon & PWA Icons

### Δημιουργία Icons:

1. **Από το logo HBA**, δημιουργήστε:
   - `favicon.ico` (16x16, 32x32, 48x48)
   - `icon-192.png` (192x192)
   - `icon-512.png` (512x512)

2. **Online Tool**: https://realfavicongenerator.net/

3. **Τοποθέτηση**:
```
hellenic-bodyguard-app/
├── favicon.ico
├── icon-192.png
├── icon-512.png
```

4. **Ενημέρωση index.html** (στο `<head>`):
```html
<link rel="icon" type="image/x-icon" href="favicon.ico">
<link rel="apple-touch-icon" href="icon-192.png">
```

---

## Βήμα 7: Test

1. **Ανανέωση browser** (Ctrl+F5)
2. **Έλεγχος**:
   - ✅ Logo στο login screen
   - ✅ Logo στην ταυτότητα
   - ✅ Logo στο admin panel
   - ✅ Χρώματα ταιριάζουν

---

## 📝 Παράδειγμα: Πλήρης Ενημέρωση

### index.html - Αλλαγές:

```html
<!-- Login Screen -->
<div class="login-header">
    <img src="hba-logo.png" alt="HBA Logo" class="logo-large-img">
    <h1>Hellenic Bodyguard<br>Association</h1>
    ...
</div>

<!-- ID Card Header -->
<div class="card-header-row">
    <img src="hba-logo-white.png" alt="HBA" class="card-emblem-img">
    <div class="card-org">
        <div class="org-name">HELLENIC BODYGUARD</div>
        <div class="org-name">ASSOCIATION</div>
    </div>
</div>
```

### admin.html - Αλλαγές:

```html
<div class="login-header">
    <img src="hba-logo.png" alt="HBA Logo" class="admin-logo">
    <h1>Admin Panel</h1>
    <p>Hellenic Bodyguards Association</p>
</div>
```

---

## ⚠️ Σημαντικά

### Δικαιώματα Logo:
- ✅ Ζητήστε επίσημη άδεια από HBA
- ✅ Χρησιμοποιείται μόνο για επίσημη χρήση
- ❌ Μην τροποποιείτε το logo χωρίς άδεια

### Μεγέθη Εικόνων:
- Logo στο login: **150-200px πλάτος**
- Logo στην κάρτα: **60-80px πλάτος**
- Favicon: **32x32px**
- PWA Icons: **192x192, 512x512**

### Formats:
- **Προτιμήστε**: PNG με transparency
- **Εναλλακτικά**: SVG (vector)
- **Αποφύγετε**: JPG (χάνει transparency)

---

## 🎨 Επιλογή Χρωμάτων με Βάση το Logo

Μόλις πάρετε το επίσημο logo:

1. **Ανοίξτε το σε image editor**
2. **Χρησιμοποιήστε eyedropper tool**
3. **Πάρτε τα κύρια χρώματα**
4. **Ενημερώστε το `:root` στο CSS**

### Online Tool:
https://imagecolorpicker.com/

---

## 📞 Επικοινωνία HBA

Για επίσημο logo και branding guidelines:

**Email**: info@hba.com.gr  
**Website**: www.hba.com.gr  
**Αίτημα**: 
```
Θέμα: Αίτημα για Επίσημο Logo - Ψηφιακή Ταυτότητα

Αγαπητοί κύριοι,

Αναπτύσσουμε την ψηφιακή εφαρμογή ταυτότητας μελών
για τον σύλλογο. Θα θέλαμε το επίσημο logo σε:

1. PNG format (διαφανές background)
2. Υψηλή ανάλυση (τουλάχιστον 500px)
3. Λευκή και έγχρωμη έκδοση

Ευχαριστούμε!
```

---

## ✅ Checklist

- [ ] Λήψη logo από HBA
- [ ] Αποθήκευση ως `hba-logo.png`
- [ ] Τοποθέτηση στον φάκελο
- [ ] Ενημέρωση `index.html`
- [ ] Ενημέρωση `admin.html`
- [ ] Προσθήκη CSS για images
- [ ] Ενημέρωση χρωμάτων (προαιρετικά)
- [ ] Δημιουργία favicon
- [ ] Test στον browser
- [ ] Test στο κινητό

---

**Αφού ολοκληρώσετε, η εφαρμογή θα έχει το επίσημο branding του HBA!** 🎉

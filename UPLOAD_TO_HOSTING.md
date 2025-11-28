# 🚀 UPLOAD THESE FILES TO GARAGESCAPE.CA HOSTING

## 📦 WHAT TO UPLOAD

Upload **EVERYTHING** in this folder to your web hosting:

```
/Users/abhichawla/garagescape.ca/
```

## ✅ ESSENTIAL FILES (Must Upload):

1. **index.html** - Your main homepage
2. **styles.css** - All the styling
3. **script.js** - Interactive features
4. **garage-decluttering-calgary.html** - Calgary landing page
5. **images/** - Folder for all photos (see images/IMAGES_NEEDED.md)

## 📂 FOLDER STRUCTURE ON YOUR HOST:

Your hosting should look exactly like this:

```
public_html/  (or www/ or htdocs/)
├── index.html
├── styles.css
├── script.js
├── garage-decluttering-calgary.html
├── images/
│   ├── hero-garage-decluttering.jpg
│   ├── before-after-1.jpg
│   ├── before-after-2.jpg
│   ├── before-after-3.jpg
│   ├── before-after-4.jpg
│   └── (more images as you add them)
```

## 🌐 HOW TO UPLOAD (Common Hosting):

### **If you have cPanel hosting:**
1. Log into cPanel
2. Open "File Manager"
3. Navigate to `public_html/` folder
4. Click "Upload"
5. Upload ALL files from garagescape.ca folder
6. Make sure images folder uploads too
7. Visit garagescape.ca to test!

### **If you have FTP access:**
1. Download FileZilla (free FTP client)
2. Connect to your hosting:
   - Host: ftp.garagescape.ca (or your hosting's FTP address)
   - Username: (from your hosting provider)
   - Password: (from your hosting provider)
3. Navigate to public_html/ on right side
4. Drag ALL files from left side (your computer) to right side (server)
5. Wait for upload to complete
6. Visit garagescape.ca to test!

### **If you have Netlify/Vercel (modern hosting):**
1. Drag and drop entire garagescape.ca folder
2. They handle the rest automatically
3. Site goes live in 30 seconds!

## ⚠️ IMPORTANT NOTES:

1. **Upload the IMAGES folder** even if empty or with placeholders
2. **Test every page** after uploading
3. **Click phone numbers** to make sure they work
4. **Test on mobile** (most customers will be mobile)

## 🔧 COMMON ISSUES:

### Problem: Images not showing
- Solution: Make sure images/ folder uploaded correctly
- Check that image files have exact names from HTML

### Problem: CSS not working (site looks plain)
- Solution: Make sure styles.css uploaded to root directory
- Check that styles.css is in same folder as index.html

### Problem: Phone links not working
- Solution: Make sure you're testing on actual phone or use tel: protocol

## 📱 AFTER UPLOAD - TEST THESE:

- [ ] Visit garagescape.ca - homepage loads
- [ ] Click phone numbers - opens dialer
- [ ] Visit garagescape.ca/garage-decluttering-calgary.html - Calgary page loads
- [ ] Scroll through - everything looks good
- [ ] Test on phone - mobile version works
- [ ] Submit contact form - you receive email

## 🎉 READY TO LAUNCH?

Once all files are uploaded and tested, follow:
**DEPLOY_NOW_CHECKLIST.md**

Good luck! 🚀

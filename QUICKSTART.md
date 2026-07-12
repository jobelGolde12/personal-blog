# Quick Start Guide

## ⚡ Get Up and Running in 5 Minutes

### 1. Start Development Server
```bash
npm run dev
```
Open `http://localhost:5174/` in your browser

### 2. Make Your First Change
Edit `src/pages/Home.jsx` and see instant reload

### 3. Build for Production
```bash
npm run build
```
Output ready in `dist/` folder

---

## 📁 Key Directories

```
src/
├── pages/        # Page components (Home, About, Blog, etc.)
├── components/   # Reusable UI components (Navbar, Footer)
├── features/     # Feature-specific components
├── routes/       # Route configuration
└── services/     # API and data services
public/
├── images/       # Your profile image here
└── info.txt      # Your personal information
```

---

## 🎨 Common Tasks

### Edit Personal Info
Edit `public/info.txt` with your information

### Change Profile Image
Place your image at `public/images/me.jpg`

### Add New Page
1. Create `src/pages/MyPage.jsx`
2. Add route in `src/routes/AppRoutes.jsx`
3. Update navbar in `src/components/Navbar.jsx`

### Customize Colors
Edit `tailwind.config.js` and change primary/secondary colors

### Deploy
```bash
npm run build
# Upload dist/ folder to your hosting
```

---

## 📚 Full Documentation

See the `docs/` folder for complete guides:
- [docs/README.md](../docs/README.md) - Project overview
- [docs/SETUP.md](../docs/SETUP.md) - Setup and configuration
- [docs/ARCHITECTURE.md](../docs/ARCHITECTURE.md) - Project structure
- [docs/COMPONENT_API.md](../docs/COMPONENT_API.md) - Component reference
- [docs/CSS_STYLING.md](../docs/CSS_STYLING.md) - Styling guide
- [docs/INDEX.md](../docs/INDEX.md) - Documentation index

---

## 🆘 Troubleshooting

**CSS not showing?**
- Restart dev server: `Ctrl+C` then `npm run dev`
- Clear browser cache

**Build failing?**
- Delete node_modules: `rm -rf node_modules dist`
- Reinstall: `npm install`

**Page not loading?**
- Check route in `AppRoutes.jsx`
- Verify import statements

---

## 🚀 Ready to Deploy?

See [docs/SETUP.md - Deployment](../docs/SETUP.md#build--deployment) section for complete deployment guide.

---

**Happy coding!** 🎉

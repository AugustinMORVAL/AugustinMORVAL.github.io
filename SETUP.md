# Getting Started with Your Portfolio

## 🎉 Your portfolio has been successfully created!

Location: `/home/augustinmvl/code/my-portfolio`

## 📋 Next Steps

### 1. Customize Your Information

Edit the following files with your personal information:

**`src/data/config.ts`** - Update:
- Your name
- Title/role
- Email address
- Resume URL (upload to Google Drive or similar)
- Social media links
- Skills (add/remove as needed)
- Experience details

**`src/data/projects.tsx`** - Update:
- Project titles and descriptions
- Live demo URLs
- GitHub repository links
- Tech stack used
- Key features

### 2. Add Project Images

Place your project screenshots in `public/assets/projects/`:
- ecommerce.jpg
- taskmanager.jpg
- portfolio.jpg
- dashboard.jpg

Or update the image paths in `src/data/projects.tsx` to match your files.

### 3. Test Locally

```bash
cd /home/augustinmvl/code/my-portfolio
pnpm install  # If you haven't already
pnpm dev
```

Visit http://localhost:5173 to see your portfolio!

### 4. Deploy to GitHub Pages

#### Option A: Automatic Deployment (Recommended)

1. Create a new GitHub repository
2. Initialize git and push:
```bash
cd /home/augustinmvl/code/my-portfolio
git init
git add .
git commit -m "Initial commit: Portfolio website"
git branch -M main
git remote add origin https://github.com/yourusername/your-repo-name.git
git push -u origin main
```

3. Enable GitHub Pages:
   - Go to repository Settings → Pages
   - Source: GitHub Actions
   - The workflow will automatically deploy on every push to main

4. Update `vite.config.ts`:
```typescript
base: '/your-repo-name/',  // Change this to your repository name
```

#### Option B: Manual Deployment

```bash
pnpm run deploy
```

## 🎨 Customization Tips

### Theme Colors

Edit `tailwind.config.js` and `src/index.css` to change colors.

### Sections

- To hide sections: Remove from `src/App.tsx`
- To add sections: Create in `src/components/sections/` and add to App

### Animations

- Adjust animation delays in section components
- Modify particle settings in `src/components/particles-background.tsx`

## 🚀 Features

✅ Responsive design (mobile, tablet, desktop)
✅ Dark/Light mode with persistence
✅ Smooth scroll animations
✅ Interactive particle background
✅ Project showcase with modals
✅ Experience timeline
✅ Contact form with validation
✅ SEO optimized
✅ Performance optimized (code splitting, lazy loading)

## 📝 File Structure

```
my-portfolio/
├── public/              # Static assets
│   └── assets/
│       └── projects/    # Project images
├── src/
│   ├── components/      # React components
│   │   ├── sections/    # Main sections (Hero, Skills, etc.)
│   │   ├── ui/          # Reusable UI components
│   │   └── animations/  # Animation components
│   ├── data/            # Configuration and data
│   │   ├── config.ts    # Personal info
│   │   └── projects.tsx # Projects data
│   ├── lib/             # Utilities
│   └── App.tsx          # Main app component
├── .github/
│   └── workflows/       # GitHub Actions for deployment
└── package.json
```

## 🐛 Troubleshooting

### Build Errors
```bash
pnpm install
pnpm run build
```

### Port Already in Use
```bash
pnpm dev --port 3001
```

### Images Not Showing
- Ensure images are in `public/assets/projects/`
- Check file names match in `projects.tsx`
- Use relative paths starting with `/`

## 📚 Documentation

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)

## 🎯 SEO Tips

1. Update `index.html` title and meta tags
2. Add meta description in `<head>`
3. Add Open Graph tags for social sharing
4. Create a sitemap.xml
5. Add robots.txt

## 💡 Tips

- Use WebP format for images (smaller file size)
- Optimize images before uploading (compress, resize)
- Test on multiple devices and browsers
- Run Lighthouse audit in Chrome DevTools
- Keep animations subtle for better UX

Need help? Check the README.md or create an issue on GitHub!

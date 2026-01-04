# Portfolio Website

A modern, responsive portfolio website built with Vite, React, TypeScript, and Tailwind CSS. Features smooth animations, dark/light mode, and beautiful particle effects.

## 🚀 Features

- ⚡ **Fast & Modern**: Built with Vite for lightning-fast development and builds
- 🎨 **Beautiful Design**: Clean, modern UI with smooth animations
- 🌓 **Dark/Light Mode**: Toggle between themes with localStorage persistence
- ✨ **Particle Effects**: Interactive particle background
- 📱 **Fully Responsive**: Works perfectly on all devices
- 🎭 **Animated Sections**: Smooth reveal animations using Framer Motion
- 📝 **Contact Form**: Form validation with Zod and React Hook Form
- 🎯 **Type-Safe**: Built with TypeScript for better developer experience

## 🛠️ Tech Stack

- **Framework**: React 19+ with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion, GSAP
- **UI Components**: Radix UI primitives
- **Form Handling**: React Hook Form + Zod
- **Icons**: Lucide React, React Icons
- **Particles**: @tsparticles

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/my-portfolio.git
cd my-portfolio
```

2. Install dependencies:
```bash
pnpm install
```

3. Start the development server:
```bash
pnpm dev
```

4. Open http://localhost:5173 in your browser

## 🎨 Customization

### Update Personal Information

Edit `src/data/config.ts` to update your personal information:

```typescript
export const config = {
  name: "Your Name",
  title: "Your Title",
  email: "your.email@example.com",
  // ... more config
}
```

### Update Projects

Edit `src/data/projects.tsx` to add/modify your projects.

### Update Theme Colors

Modify `tailwind.config.js` and `src/index.css` to change the color scheme.

## 🚀 Deployment

### GitHub Pages

1. Update `vite.config.ts` with your repository name:
```typescript
export default defineConfig({
  base: '/your-repo-name/',
  // ... other config
})
```

2. Deploy using the deploy script:
```bash
pnpm run deploy
```

Or push to main branch and GitHub Actions will automatically deploy.

## 📝 License

MIT License - feel free to use this template for your own portfolio!

## 🙏 Credits

Inspired by Naresh Khatri 3d portfolio design and built with ❤️ using open-source technologies.

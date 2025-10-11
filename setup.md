# Setup Instructions

## Quick Start

1. **Install dependencies:**
```bash
npm install
```

2. **Start development server:**
```bash
npm run dev
```

3. **Open your browser:**
Navigate to `http://localhost:3000`

## If you encounter any issues:

### Module Resolution Issues:
If you see "Module not found" errors, try:
```bash
rm -rf node_modules package-lock.json
npm install
```

### TypeScript Issues:
If TypeScript gives errors, try:
```bash
npm run build
```

### Port Issues:
If port 3000 is busy, use:
```bash
npm run dev -- -p 3001
```

## Project Structure:
```
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── Calculator.tsx
│   ├── Testimonials.tsx
│   ├── FAQ.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── next.config.js
```

## Features Included:
- ✅ Modern responsive design
- ✅ Smooth animations with Framer Motion
- ✅ Interactive stamp duty calculator
- ✅ Mobile-first approach
- ✅ TypeScript support
- ✅ Tailwind CSS styling
- ✅ SEO optimized
- ✅ Performance optimized

## Customization:
- Colors: Edit `tailwind.config.js`
- Content: Edit component files in `/components`
- Styling: Modify Tailwind classes or `globals.css`
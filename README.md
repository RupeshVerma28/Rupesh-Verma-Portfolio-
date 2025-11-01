# Portfolio React Application

A modern, responsive portfolio website built with React, Tailwind CSS, and Bootstrap. This portfolio showcases the work, achievements, certificates, and projects of Rupesh Verma.

## Features

- **React-based**: Built with React 18 and React Router for smooth navigation
- **Tailwind CSS & Bootstrap**: Modern styling with Tailwind CSS and Bootstrap integration
- **Responsive Design**: Fully responsive across all devices
- **PWA Support**: Progressive Web App with offline capabilities
- **Multi-page Navigation**: 
  - Home page with Hero, About, Skills, Work, and Contact sections
  - Achievements page
  - Certificates page with interactive flip cards
  - Projects page showcasing all projects

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## Project Structure

```
portfolio-react/
├── public/
│   ├── Images/          # All image assets
│   └── manifest.json    # PWA manifest
├── src/
│   ├── components/
│   │   ├── Header.jsx   # Navigation header
│   │   └── Footer.jsx   # Footer component
│   ├── pages/
│   │   ├── Home.jsx         # Main landing page
│   │   ├── Achievements.jsx # Achievements page
│   │   ├── Certificates.jsx # Certificates page
│   │   └── Projects.jsx    # Projects page
│   ├── App.jsx          # Main app component with routing
│   ├── main.jsx        # React entry point
│   └── index.css        # Global styles
├── index.html           # HTML template
├── package.json         # Dependencies
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind configuration
└── postcss.config.js    # PostCSS configuration
```

## Technologies Used

- **React 18**: UI library
- **React Router DOM**: Client-side routing
- **Vite**: Build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework
- **Bootstrap 5**: CSS framework
- **Lucide React**: Icon library
- **Vite PWA Plugin**: PWA support

## Deployment

The application can be deployed to any static hosting service:
- Vercel
- Netlify
- GitHub Pages
- Any static file hosting

Make sure to run `npm run build` before deploying, and serve the `dist` folder.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2025 Rupesh Verma. All rights reserved.


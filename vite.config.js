import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// Temporarily disabled PWA to debug
// import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    // Temporarily disabled PWA to debug
    // VitePWA({
    //   registerType: 'autoUpdate',
    //   includeAssets: ['favicon.ico', 'Images/*'],
    //   manifest: {
    //     name: 'Rupesh Verma Portfolio',
    //     short_name: 'Portfolio',
    //     description: 'Professional Portfolio of Rupesh Verma',
    //     theme_color: '#0a0a0a',
    //     background_color: '#0a0a0a',
    //     display: 'standalone',
    //     icons: [
    //       {
    //         src: 'Images/propic.png',
    //         sizes: '192x192',
    //         type: 'image/png'
    //       },
    //       {
    //         src: 'Images/propic.png',
    //         sizes: '512x512',
    //         type: 'image/png'
    //       }
    //     ]
    //   }
    // })
  ],
  publicDir: 'public'
})


import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'
import { VitePWA } from 'vite-plugin-pwa'
import viteCompression from 'vite-plugin-compression'
import zlib from 'zlib'

export default defineConfig({
  plugins: [
    solid(),
    VitePWA({
      registerType: 'prompt',
      injectRegister: null,
      manifest: {
        name: 'Noting',
        short_name: 'Noting',
        id: '/',
        start_url: '/?from=homescreen',
        display: 'standalone',
        orientation: 'portrait-primary',
        description: 'Note app',
        categories: ['productivity'],
        lang: 'en',
        dir: 'ltr',
        display_override: [
          'standalone',
          'minimal-ui',
          'window-controls-overlay'
        ],
        prefer_related_applications: false,
        theme_color: "#ffffff",
        background_color: "#ffffff",
        icons: [
          {
            src: "icon-transparent-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any"
          },
          {
            src: "icon-transparent-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "monochrome any"
          },
          {
            src: "icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable"
          }
        ]
      }
    }),
    viteCompression({
      algorithm: 'brotliCompress',
      filter: /\.(js|mjs|png|webmanifest|json|txt|css|html|svg)$/i,
      threshold: 512,
      compressionOptions: {
        params: {
					[zlib.constants.BROTLI_PARAM_QUALITY]: zlib.constants.BROTLI_MAX_QUALITY,
          [zlib.constants.BROTLI_PARAM_MODE]: zlib.constants.BROTLI_MODE_TEXT,
				},
      }
    })
  ],
  build: {
    target: 'esnext',
    minify: 'esbuild'
  },
})

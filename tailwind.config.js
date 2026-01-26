/** @type {import('tailwindcss').Config} */

/** BRAND MANUAL CONSTANTS */
const BRAND_COLORS = {
  // Primary palette
  beige: '#F5F2ED',        // Light beige - Base color
  rose: '#F0C9C7',         // Soft rose - Secondary
  teal: '#46EBBB',         // Teal/Turquoise - Accent
  
  // Dark palette
  charcoal: '#1A1A1A',     // Dark charcoal
  black: '#000000',        // Pure black
  
  // Extended palette (legacy)
  pink: {
    500: '#F45EBB',
    600: '#E044A7'
  }
};

/** BRAND TYPOGRAPHY */
const BRAND_FONTS = {
  primary: "'COOLVETICA', sans-serif",
  secondary: "'Cambria', serif",
  tertiary: "'Blink Script', cursive"
};

export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        // Brand colors from manual
        brand: {
          beige: BRAND_COLORS.beige,
          rose: BRAND_COLORS.rose,
          teal: BRAND_COLORS.teal,
          charcoal: BRAND_COLORS.charcoal,
          black: BRAND_COLORS.black
        },
        // Legacy colors (backwards compatibility)
        rose: {
          500: '#F45EBB',
          600: '#E044A7'
        }
      },
      fontFamily: {
        // Brand typography - from BRAND_FONTS constants
        coolvetica: BRAND_FONTS.primary,
        cambria: BRAND_FONTS.secondary,
        'blink-script': BRAND_FONTS.tertiary
      },
      fontWeight: {
        // COOLVETICA available weights from font files
        'extra-light': 200,      // Coolvetica Hv Comp
        light: 300,
        normal: 400,             // Coolvetica Rg
        book: 400,               // Coolvetica Rg
        bold: 700
      }
    }
  },
  plugins: []
}

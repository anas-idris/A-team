/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Professional Colors (Home + Contact Pages)
        professional: {
          primary: '#2C3E50',
          'primary-dark': '#1A252F',
          'primary-light': '#ECF0F1',
          accent: '#3498DB',
          'accent-dark': '#2980B9',
          background: '#FFFFFF',
          'alt-background': '#F8F9FA',
          surface: '#FFFFFF',
          'text-primary': '#2C3E50',
          'text-secondary': '#7F8C8D',
          'text-disabled': '#BDC3C7',
          border: '#E0E0E0',
          success: '#27AE60',
          error: '#E74C3C',
        },
        // Spent App Colors (Product Page)
        spent: {
          primary: '#3F51B5', // DeepIndigo
          'primary-dark': '#303F9F',
          bright: '#5C6BC0', // BrightIndigo
          soft: '#E8EAF6', // SoftIndigo
          accent: '#FF4081', // HotPink
          'accent-dark': '#F50057',
          'mint-green': '#00BFA5', // MintGreen
          coral: '#FF5252', // Coral
          navy: '#1A237E', // Navy
          slate: '#455A64', // Slate
          'light-slate': '#78909C', // LightSlate
          background: '#FAF9FF', // AppBackground
        },
      },
      spacing: {
        'spacing-xs': '0.25rem', // 4px
        'spacing-sm': '0.5rem', // 8px
        'spacing-md': '1rem', // 16px
        'spacing-lg': '1.5rem', // 24px
        'spacing-xl': '3rem', // 48px
        'spacing-xxl': '5rem', // 80px
      },
      borderRadius: {
        'rounded-sm': '0.25rem', // 4px
        'rounded-md': '0.5rem', // 8px
        'rounded-lg': '1rem', // 16px
        'rounded-full': '9999px',
      },
      fontSize: {
        'h1': ['48px', { lineHeight: '1.2', fontWeight: '700' }],
        'h2': ['36px', { lineHeight: '1.3', fontWeight: '600' }],
        'h3': ['24px', { lineHeight: '1.4', fontWeight: '600' }],
        'h4': ['20px', { lineHeight: '1.4', fontWeight: '500' }],
        'body-large': ['18px', { lineHeight: '1.6', fontWeight: '400' }],
        'body': ['16px', { lineHeight: '1.6', fontWeight: '400' }],
        'body-small': ['14px', { lineHeight: '1.5', fontWeight: '400' }],
        'caption': ['12px', { lineHeight: '1.4', fontWeight: '400' }],
      },
      fontFamily: {
        heading: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'],
        body: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'Monaco', 'monospace'],
      },
      maxWidth: {
        'content': '1200px',
      },
      screens: {
        'mobile': '480px',
        'tablet': '768px',
        'desktop': '1024px',
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
}

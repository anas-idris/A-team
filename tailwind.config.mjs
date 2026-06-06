/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Professional Colors (Home + Contact Pages)
        professional: {
          primary: '#0F172A',
          'primary-dark': '#020617',
          'primary-light': '#F1F5F9',
          accent: '#6366F1',
          'accent-dark': '#4F46E5',
          background: '#FFFFFF',
          'alt-background': '#F8FAFC',
          surface: '#FFFFFF',
          'text-primary': '#0F172A',
          'text-secondary': '#475569',
          'text-disabled': '#94A3B8',
          border: '#E2E8F0',
          success: '#059669',
          error: '#DC2626',
        },
        // Spent App Colors (Product Page)
        spent: {
          primary: '#1E3A5F', // Deep Navy
          'primary-dark': '#0F2440',
          bright: '#2563EB', // Royal Blue
          soft: '#EFF6FF', // Light Blue
          accent: '#0891B2', // Teal
          'accent-dark': '#0E7490',
          'mint-green': '#059669', // Emerald
          coral: '#DC2626', // Red
          navy: '#1E3A5F', // Navy
          slate: '#475569', // Slate
          'light-slate': '#64748B', // Light Slate
          background: '#FFFFFF', // White
        },
        // Unified Brand (cross-section)
        brand: {
          primary: '#0F172A',
          'primary-dark': '#020617',
          'primary-light': '#F1F5F9',
          accent: '#6366F1',
          'accent-dark': '#4F46E5',
          background: '#FFFFFF',
          'alt-background': '#F8FAFC',
          'text-primary': '#0F172A',
          'text-secondary': '#475569',
          border: '#E2E8F0',
          surface: '#FFFFFF',
        },
        dark: {
          background: '#0B1120',
          'alt-background': '#1E293B',
          surface: '#1E293B',
          'text-primary': '#F1F5F9',
          'text-secondary': '#94A3B8',
          'text-disabled': '#64748B',
          border: '#334155',
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

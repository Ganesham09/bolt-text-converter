/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'typewriter': ['JetBrains Mono', 'monospace'],
        'serif': ['Instrument Serif', 'serif'],
      },
      animation: {
        'fade-in-down': 'fade-in-down 0.5s ease-out',
        'fade-in-up': 'fade-in-up 0.5s ease-out',
        'typing': 'typing 3.5s steps(40, end) forwards',
        'typing-with-cursor': 'typing 3.5s steps(40, end), blink-caret .75s step-end infinite',
        'spin-slow': 'spin 20s linear infinite',
        'line-draw': 'line-draw 1s ease-out forwards, float 3s ease-in-out infinite',
        'language-cycle': 'language-cycle 4s steps(1) forwards',
      },
      keyframes: {
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        'typing': {
          'from': { width: '0' },
          'to': { width: '100%' }
        },
        'blink-caret': {
          'from, to': { borderColor: 'transparent' },
          '50%': { borderColor: 'currentColor' }
        },
        'line-draw': {
          '0%': { 
            width: '0',
            opacity: '0'
          },
          '100%': { 
            width: '100%',
            opacity: '1'
          }
        },
        'float': {
          '0%, 100%': { 
            transform: 'translateY(0)',
            opacity: '1'
          },
          '50%': { 
            transform: 'translateY(-4px)',
            opacity: '0.8'
          }
        },
        'language-cycle': {
          '0%': { content: '"ब्राउ़ज़र भाषा"' },
          '20%': { content: '"ブラウザ言語"' },
          '40%': { content: '"浏览器语言"' },
          '60%': { content: '"لغة المتصفح"' },
          '80%': { content: '"Browser Lingo"' },
          '100%': { content: '"Browser Lingo"' }
        }
      }
    },
  },
  plugins: [],
};

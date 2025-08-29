module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'clash': ['Clash Display', 'Inter', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#6366F1',
        secondary: '#F43F5E',
        'accent-yellow': '#FDE047',
        'accent-blue': '#60A5FA',
        'accent-pink': '#F472B6',
        'bg-primary': '#F9FAFB',
        'bg-yellow': '#FEF3C7',
        'bg-blue': '#DBEAFE',
        'bg-pink': '#FCE7F3',
        'text-primary': '#111827',
        'text-secondary': '#374151',
      },
      boxShadow: {
        'brutal': '8px 8px 0px 0px rgba(0,0,0,0.1)',
        'brutal-lg': '12px 12px 0px 0px rgba(0,0,0,0.2)',
        'brutal-color': '8px 8px 0px 0px var(--primary)',
        'brutal-yellow': '8px 8px 0px 0px #FDE047',
        'brutal-blue': '8px 8px 0px 0px #60A5FA',
        'brutal-pink': '8px 8px 0px 0px #F472B6',
      },
      animation: {
        'bounce-chunky': 'bounce 0.6s ease-in-out',
        'squish': 'squish 0.2s ease-out',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        squish: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(0.95)' },
          '100%': { transform: 'scale(1)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        }
      },
      letterSpacing: {
        'widest': '0.25em',
      },
      borderWidth: {
        '6': '6px',
        '8': '8px',
      }
    },
  },
  plugins: [],
};

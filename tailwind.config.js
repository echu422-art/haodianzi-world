/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0b1736", // 深藍
          light: "#1b2b5a",
          accent: "#ff6b35"  // 橙色點綴
        }
      },
      backgroundImage: {
        'tension-gradient': 'radial-gradient(1200px 600px at 20% 10%, rgba(59,130,246,0.15), transparent), radial-gradient(900px 500px at 80% 20%, rgba(236,72,153,0.15), transparent), radial-gradient(1000px 700px at 50% 90%, rgba(255,255,255,0.06), transparent)'
      },
      keyframes: {
        twinkle: {
          '0%, 100%': { opacity: 0.6 },
          '50%': { opacity: 1 },
        },
        floaty: {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
          '100%': { transform: 'translateY(0px)' },
        }
      },
      animation: {
        twinkle: 'twinkle 3s ease-in-out infinite',
        floaty: 'floaty 6s ease-in-out infinite'
      }
    },
  },
  plugins: [],
}

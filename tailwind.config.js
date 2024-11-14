/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      container: {
        center: true,
      },
      boxShadow: {
        '1-bottom': '0 4px 6px -1px rgba(0, 0, 0, 0.1)', // سایه‌ای که فقط در پایین اعمال می‌شود
      },
    },
  },
  plugins: [],
}


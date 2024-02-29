/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          singlePage : "url('/singleProjectPage.jpg')",
          projects: "url('/projects.jpg')",
          home: "url('/home.jpg')",
          card: "url('/card_image.jpg')",
      },
      boxShadow: {
        'about': '0px 4px 10px 0px rgba(0, 0, 0, 0.37)',
        'buttons': '0px 4px 8px 0px rgba(15, 42, 61, 0.20)',
        'cards':  '0px 6px 10.1px 0px rgba(0, 0, 0, 0.16)',
        'contact': '2px 8px 7.5px 0px rgba(0, 0, 0, 0.25)',
        'view': ' 0px 4px 8px 0px rgba(15, 42, 61, 0.20)',
      },
    },
  },
  plugins: [],
}

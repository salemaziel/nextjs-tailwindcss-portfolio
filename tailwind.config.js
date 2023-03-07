module.exports = {
  mode: 'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    container: {
      center: true,
    },
    screens: {
      mob: "375px",
      tablet: "768px",
      laptop: "1024px",
      desktop: "1280px",
      laptopl: "1440px",
    },
    extend: {
      fontFamily: {
        hind: ['Hind', "sans-serif"],
        aaaiight: ['Aaaiight', "sans-serif"],
        aaaiightfat: ['Aaaiight', "sans-serif"],
      },
    },
  },
  plugins: [],
  corePlugins: {
    fontFamily: true,
  },
};

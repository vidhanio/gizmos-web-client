/** @type {import('tailwindcss/tailwind-config').TailwindConfig} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.css",
  ],
  theme: {
    extend: {
      width: {
        "gizmo-item-image": "128px",
        "gizmo-image": "512px",
      },
      height: {
        "gizmo-item-image": "85px",
        "gizmo-image": "340px",
      },
    },
  },
  plugins: [],
};

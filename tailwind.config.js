/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
         colors: {
            "gray-20": "#F8F4EB",
            "gray-50": "#EFE6E6",
            "gray-100": "#DFCCCC",
            "gray-500": "#5E0000",
            "primary-100": "#FFE1E0",
            "primary-300": "#FFA6A3",
            "primary-500": "#FF6B66",
            "secondary-400": "#FFCD58",
            "secondary-500": "#FFC132",
         },
         backgroundImage: (theme) => ({
            "gradiant-yellowred": "linear-gradient(90deg, #FF616A 0%, #FFC837 100%)",
            "mobile-home": "url('./assets/HomePageGrapic.png')"
         })
      },
	},
	plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
        './index.html', 
        './src/**/*.{vue,js,ts,jsx,tsx}'
    ],
	theme: {
		extend: {
			colors: {
				brand: {
                    light: '#3fbaeb',
					DEFAULT: '#0fa9e6',
					dark: '#0c87b8',
				},
			},
            fontFamily: {
                headline: "Poppins, sans-serif"
            }
		},
	},
	plugins: [],
}

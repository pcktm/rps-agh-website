/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				brand: {
					DEFAULT: '#3748C8',
					'10': '#EEEFFA',
					'50': '#C7CCF0',
					'100': '#B7BDEB',
					'200': '#97A0E2',
					'300': '#7783DA',
					'400': '#5765D1',
					'500': '#3748C8',
					'600': '#2B389C',
					'700': '#1F2870',
					'800': '#131844',
					'900': '#070918'
				}
			},
			container: {
				screens: {
					"sm": "640px",
					"md": "768px",
					"lg": "1024px",
					"xl": "1024px",
					"2xl": "1280px"
				}
			},
			fontFamily: {
				"sen": ["Sen", "sans-serif"],
				"work-sans": ["Work Sans", "sans-serif"]
			},
		},
	},
	plugins: [
		require('@tailwindcss/forms'),
	],
}

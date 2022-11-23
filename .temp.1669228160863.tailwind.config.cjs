/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				brand: {
					DEFAULT: '#3748C8',
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
				"sans": ["Inter", "ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "Noto Sans", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"],
				
		},
	},
	plugins: [
		require('@tailwindcss/forms'),
	],
}

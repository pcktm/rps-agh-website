/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				brand: {
					"50": "#697afa",
					"100": "#5f70f0",
					"200": "#5566e6",
					"300": "#4b5cdc",
					"400": "#4152d2",
					"500": "#3748c8",
					"600": "#2d3ebe",
					"700": "#2334b4",
					"800": "#192aaa",
					"900": "#0f20a0"
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
			}
		},
	},
	plugins: [
		require('@tailwindcss/forms'),
	],
}

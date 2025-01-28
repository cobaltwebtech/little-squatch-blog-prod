/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	darkMode: 'class',
	content: [
		'./src/**/*.{astro,html,js,md,mdx,ts}',
		'./node_modules/preline/preline.js',
	],
	theme: {
		extend: {
			colors: {
				white: '#f8f9fa'
			},
			fontFamily: {
				sans: ['Rockwell Nova', ...defaultTheme.fontFamily.serif]
			},
			gridTemplateColumns: {
				list: 'repeat(auto-fill, minmax(400px, max-content))'
			}
		}
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('preline/plugin'),
	]
}

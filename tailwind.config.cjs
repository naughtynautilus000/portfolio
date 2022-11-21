/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			'white': '#cee8f3',
			'highlight': '#52e5b9',
			'background': '#0a192f',
			'blue': '#319fce',
			'dark-blue': '#10284C'
		},
		extend: {
			width: {
				'sides': '150px'
			},
			height: {
				'header': '75px'
			}
		}
	},
	plugins: [],
}

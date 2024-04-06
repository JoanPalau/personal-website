/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			dark: '#22323f',
			darker: '#1d2a35',
			darkest: '#0b1215',
			white: '#f2f2f2',
			accent: '#ff9a3c'
		},
		extend: {
			animation: {
				typewriter: "typewriter 2s steps(11) forwards",
				caret: 'typewriter 2s steps(11) forwards, blink 1s steps(11) infinite 2s',
			},
			keyframes: {
				typewriter: {
					to: {
						left: "100%"
					}
				},
				blink: {
					'0%': {
						opacity: '0',
					},
					'0.1%': {
						opacity: '1',
					},
					'50%': {
						opacity: '1',
					},
					'50.1%': {
						opacity: '0',
					},
					'100%': {
						opacity: '0',
					},
				},
			},
		},
	},
	plugins: [],
}

/** @type {import('tailwindcss').Config} */
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			screens: {
				qhd: '1440px',
			},
		},
	},

	plugins: [],
};

module.exports = config;

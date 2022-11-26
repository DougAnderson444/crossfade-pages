/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		// for production: https://blog.logrocket.com/how-to-use-custom-fonts-tailwind-css/
		// fontFamily: {
		// 	architect: ['Architects Daughter', 'cursive'],
		// 	bangers: ['Bangers', 'cursive'],
		// 	hand: ['Just Another Hand', 'cursive']
		// },
		extend: {
			fontFamily: {
				architect: ['Architects Daughter', 'cursive'],
				bangers: ['Bangers', 'cursive'],
				hand: ['Just Another Hand', 'cursive']
			}
		}
	},
	plugins: []
};

import { data } from '$lib/stores';
import { nanoid } from 'nanoid/non-secure';
import { get } from 'svelte/store';

export function addNewChild(pageId: string | number, childId?: string) {
	const id = childId || nanoid(6);
	data.set({
		...get(data),
		...createNewPage(id), // create the page
		[pageId]: {
			...get(data)[pageId],
			children: [...get(data)[pageId].children, { id }] // add it as a child to the creator page
		}
	});
}

export function createNewPage(id) {
	return {
		[id]: {
			children: [],
			color: generatePastelHex() //generateVibrantHex()
		}
	};
}

// make a function that returns a random color from the tailwindcss color palette
export function randomColor() {
	const colors = ['red', 'orange', 'yellow', 'green', 'teal', 'blue', 'indigo', 'purple', 'pink'];
	const color = colors[Math.floor(Math.random() * colors.length)];
	const shade = Math.floor(Math.random() * 9) + 1;
	const colorGen = `${color}-${shade}00`;
	console.log({ colorGen });
	return colorGen;
}

// make a function that returns a random pastel hex color from the browser css color palette
// return a hex value
/**
 * Pastel colors are pale, delicate shades that are typically made by mixing a primary color
 * with white or by desaturating a brighter color.
 * This creates a softer, more muted version of the original color.
 * Pastel colors are often associated with spring and Easter,
 * as well as with baby and nursery themes.
 */
export function generatePastelHex() {
	// generate random numbers for red, green, and blue components
	// these numbers should be between 0 and 255
	let r = Math.floor(Math.random() * 256);
	let g = Math.floor(Math.random() * 256);
	let b = Math.floor(Math.random() * 256);

	// mix the components to make a pastel color
	r = Math.floor(r + (255 - r) / 2);
	g = Math.floor(g + (255 - g) / 2);
	b = Math.floor(b + (255 - b) / 2);

	// convert the components to hexadecimal and return the color
	return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

export function generateVibrantHex() {
	// generate random numbers for red, green, and blue components
	// these numbers should be between 0 and 255
	let r = Math.floor(Math.random() * 256);
	let g = Math.floor(Math.random() * 256);
	let b = Math.floor(Math.random() * 256);

	// mix the components to make a vibrant color
	r = Math.floor(r * 0.8 + (255 - r) * 0.2);
	g = Math.floor(g * 0.8 + (255 - g) * 0.2);
	b = Math.floor(b * 0.8 + (255 - b) * 0.2);

	// convert the components to hexadecimal and return the color
	return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

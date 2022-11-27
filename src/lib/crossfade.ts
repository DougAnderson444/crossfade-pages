import { crossfade as svelteCrossfade } from 'svelte/transition';
import { sineOut } from 'svelte/easing';

import { writable } from 'svelte/store';

export const crossfade = svelteCrossfade({ duration: 400, easing: sineOut });
export const selected = writable('');

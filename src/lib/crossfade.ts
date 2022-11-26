import { crossfade as svelteCrossfade } from 'svelte/transition';
import { quintOut } from 'svelte/easing';

import { writable } from 'svelte/store';

export const crossfade = svelteCrossfade({ duration: 400, easing: quintOut });
export const selected = writable('');

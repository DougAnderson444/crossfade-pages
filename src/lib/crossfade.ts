import { crossfade as svelteCrossfade } from 'svelte/transition';
import { sineOut } from 'svelte/easing';

import { writable } from 'svelte/store';

export const duration = 450;

export const crossfade = svelteCrossfade({ duration, easing: sineOut });
export const selected = writable('');

import { crossfade as svelteCrossfade } from 'svelte/transition';
import { writable } from 'svelte/store';

export const crossfade = svelteCrossfade({ duration: 400 });
export const selected = writable(null);

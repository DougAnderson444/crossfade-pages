<script>
	import { onMount } from 'svelte';
	import Resizer from './Resizer.svelte';
	import { fly, scale } from 'svelte/transition';
	import { quintOut, elasticOut } from 'svelte/easing';

	export let styling = 'bg-transparent ';
	export let focused = false;

	let offsetWidth, offsetHeight;
	let min = -1;
	let max = 2; // 1 or 2 looks like a sketch
	let skew = 0.5;
	let rand = Math.random();
	let high90s = () => 100 - Math.random() * (max - min) + min;
	let singlDigsR = () => Math.random() * (max / 2);
	let singlDigsW = () => 1 + Math.random() * (max - min) + min;
	let rotate = () => `rotate(${Math.floor(singlDigsW() / 2)}deg) scale(${1 + singlDigsR() / 20})`;

	let lower = 3;
	let higher = 100;
	let bordRad = () =>
		`${higher}px ${lower}px ${higher}px ${lower}px/${lower}px ${higher}px ${lower}px ${higher}px`;

	let borderWidth = () => `${singlDigsW()}px ${singlDigsW()}px ${singlDigsW()}px ${singlDigsW()}px`;
	let mounted = false;

	onMount(() => {
		mounted = true;
	});

	function handleFocus(e) {
		console.log('focused');
		focused = true;
	}
</script>

<div
	class="flex-1 flex flex-col m-2 p-2 min-w-0 h-full border border-dashed border-neutral-700/60 font-architect focus:outline-green-500  {styling} "
	style:border-radius={bordRad()}
	style:border-width={borderWidth()}
	style:outline-radius={bordRad()}
	style:outline-width={borderWidth()}
	on:focus={handleFocus}
	on:focusout
	on:blur
	bind:offsetWidth
	bind:offsetHeight
	in:scale={{ easing: elasticOut }}
>
	<slot />
	{#if mounted && focused && offsetWidth && offsetHeight}
		<Resizer />
	{/if}
</div>

<style lang="postcss">
</style>

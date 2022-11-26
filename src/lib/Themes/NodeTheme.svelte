<script>
	import { onMount } from 'svelte';
	import Resizer from './Resizer.svelte';
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
	class="flex flex-col m-2 p-2 w-fit min-w-0 border border-solid border-black/50 font-architect focus:outline-green-500  {styling} "
	style:border-radius={bordRad()}
	style:border-width={borderWidth()}
	style:outline-radius={bordRad()}
	style:outline-width={borderWidth()}
	on:focus={handleFocus}
	on:focusout
	on:blur
	bind:offsetWidth
	bind:offsetHeight
>
	<slot />
	{#if mounted && focused && offsetWidth && offsetHeight}
		<Resizer />
	{/if}
</div>

<style lang="postcss">
</style>

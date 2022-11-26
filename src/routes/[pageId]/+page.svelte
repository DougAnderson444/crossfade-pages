<script>
	import Crossfade from '$lib/Crossfade.svelte';

	import { crossfade, selected } from '$lib/crossfade';

	/** @type {import('./$types').PageData} */
	export let data;

	const [send, receive] = crossfade;
</script>

{#if $selected}
	<a
		out:send={{ key: $selected }}
		in:receive={{ key: $selected }}
		class="absolute top-0 left-0 w-full h-96 bg-white"
		style="border: 10px solid crimson; display: block; grid-area: 1/1;"
		href="/">Go to /</a
	>
{/if}

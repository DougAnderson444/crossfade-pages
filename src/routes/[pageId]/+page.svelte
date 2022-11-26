<script>
	import { crossfade, selected } from '$lib/crossfade';

	/** @type {import('./$types').PageData} */
	export let data;

	const [send, receive] = crossfade;
</script>

{#if $selected}
	<a
		out:send={{ key: $selected }}
		in:receive={{ key: $selected }}
		class="absolute top-0 left-0"
		style="border: 10px solid crimson; width: 300px; height: 300px; display: block; grid-area: 1/1;"
		href="/">Go to /</a
	>
{/if}

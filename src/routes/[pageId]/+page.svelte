<script>
	import Crossfade from '$lib/Crossfade.svelte';
	/**
	 * Pass around $selected so the crossfades know what the to/from send/rx locations are
	 */
	import { selected } from '$lib/crossfade';

	/** @type {import('./$types').PageData} */
	export let data;
</script>

{#if $selected}
	<!-- When Crossfade enters as a new page, it needs to be position:absolute to cover up the old page before the old page disappears -->
	<!-- Otherwise, there is a jump because they don't overlap ech other -->
	<!-- Technically, this should have a higher z-index as well -->
	<Crossfade id={$selected} styling={'absolute'}>
		<a
			class="w-full h-96 cursor-pointer select-none bg-green-500"
			contenteditable={false}
			style="display: block; grid-area: 1/1;"
			href="/">Go to /</a
		>
	</Crossfade>
{/if}

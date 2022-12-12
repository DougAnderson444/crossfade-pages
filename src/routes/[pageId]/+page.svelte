<script>
	import Page from '$lib/Page.svelte';
	import Crossfade from '$lib/Crossfade.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
	$: pageId = data.pageId; // refresh page when pageId changes
</script>

{#key pageId}
	<!-- When Crossfade enters as a new page, it needs to be position:absolute to cover up the old page before the old page disappears -->
	<!-- Otherwise, there is a jump because they don't overlap ech other -->
	<!-- Technically, this should have a higher z-index as well -->
	<Crossfade id={pageId} styling={'absolute w-96 h-96 z-20'}>
		<Page {pageId} />
	</Crossfade>
{/key}

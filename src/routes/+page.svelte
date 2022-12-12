<script>
	import Crossfade from '$lib/Crossfade.svelte';

	import Page from '$lib/Page.svelte';
	import { data } from '$lib/stores';
	import { createNewPage } from '$lib/utils';

	let pageId = 'home'; // manually set the pageId to home

	if (!$data) $data = createNewPage(pageId);
</script>

<Crossfade id={pageId} styling={'absolute w-96 h-96 z-20'}>
	<Page {pageId} />
</Crossfade>

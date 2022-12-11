<script>
	import Page from '$lib/Page.svelte';
	import { data } from '$lib/stores';
	import { createNewPage, generatePastelHex, generateVibrantHex } from '$lib/utils';

	if (!$data) {
		$data = {
			home: {
				children: [],
				color: generateVibrantHex()
			}
		};
	}
</script>

<Page pageId={'home'} />

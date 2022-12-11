<script>
	import Page from '$lib/Page.svelte';
	import { data } from '$lib/stores';

	if (!$data) {
		$data = {
			home: {
				children: []
			}
		};
	} else {
		console.log('data defined: ', $data);
	}
</script>

<Page pageId={'home'} />

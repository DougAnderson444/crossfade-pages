<script>
	import Page from '$lib/Page.svelte';
	import { data } from '$lib/stores';

	if (!$data) {
		$data = {
			home: {
				children: []
			}
		};
	}
</script>

<Page pageId={'home'} />

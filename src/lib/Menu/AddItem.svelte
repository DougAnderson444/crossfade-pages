<script lang="ts">
	/**
	 * On click, adds an item to the layout
	 */
	import { nanoid } from 'nanoid/non-secure';
	import { data } from '$lib/stores';

	export let pageId: string | number;

	function handleAddItem() {
		const id = nanoid(6);
		$data = {
			...$data,
			// create the page
			[id]: {
				children: []
			},
			// add it as a child to the creator page
			[pageId]: {
				...$data[pageId],
				children: [...$data[pageId].children, { id }]
			}
		};
		console.log('data now: ', $data);
	}
</script>

<button on:click={handleAddItem}><slot>Add Item</slot></button>

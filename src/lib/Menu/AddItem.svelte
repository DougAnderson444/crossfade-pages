<script lang="ts">
	/**
	 * On click, adds an item to the layout
	 */
	import { nanoid } from 'nanoid/non-secure';
	import { data } from '$lib/stores';
	import { addNewChild } from '$lib/utils';

	export let pageId: string | number;

	function handleAddItem() {
		addNewChild(pageId);
	}
</script>

<button on:click={handleAddItem}><slot>Add Item</slot></button>

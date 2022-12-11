<script>
	/**
	 * On click, adds an item to the layout
	 */
	import { nanoid } from 'nanoid/non-secure';
	import { data } from '$lib/stores';

	function handleAddItem() {
		console.log('add item');
		$data = [
			...$data,
			{
				children: [],
				id: nanoid(6)
			}
		];
	}
</script>

<button on:click={handleAddItem}><slot>Add Item</slot></button>

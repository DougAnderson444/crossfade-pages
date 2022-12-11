<script>
	import Plus from '$lib/SVGs/Plus.svelte';
	import ToolItem from './ToolItem.svelte';
	import ToolBox from './ToolBox.svelte';
	import AddItem from './AddItem.svelte';

	/**
	 * @type {any[]}
	 */
	export let data = [];
</script>

<div class="absolute bottom-0 right-0 m-1 p-1">
	<ToolBox>
		<ToolItem>
			<AddItem bind:data>
				<Plus />
			</AddItem>
		</ToolItem>
	</ToolBox>
</div>

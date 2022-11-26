<script>
	import { items } from '$lib/stores';
	import { crossfade, selected } from '$lib/crossfade';
	import { nanoid } from 'nanoid/non-secure';

	const [send, receive] = crossfade;

	if (!$items.length) {
		$items = [
			{
				children: [],
				id: nanoid(6)
			}
		];
	}

	function handleNavigate(event) {
		$selected = event.target.id;
	}
</script>

<div class="flex flex-row flex-wrap">
	{#if $items && $items.length}
		{#each $items as item, i}
			<a
				on:click={handleNavigate}
				out:send={{ key: item.id }}
				in:receive={{ key: item.id }}
				id={item.id}
				data-item={item}
				class="flex-0"
				style="border: 1px solid crimson; width: 100px; height: 100px; display: block; grid-area: 1/1;"
				href="/foo"
				>Item {item.id}
				<br />Go to foo</a
			>
		{/each}
	{/if}
</div>

<!-- <div class="flex flex-col p-2 gap-2 h-full text-center justify-center">
	<div class="flex-0 flex flex-row h-1/6">Purpose</div>
	<div class="flex-1 flex flex-row">
		<div class="flex-1 flex flex-col">People</div>
		<div class="flex-1 flex flex-col">
			<div class="flex-1 flex flex-row">Projects</div>
			<div class="flex-1 flex flex-row">Production</div>
		</div>
		<div class="flex-1 flex flex-col">Progress</div>
	</div>
	<div class="flex-0 flex flex-row h-1/6">Property</div>
</div> -->
<style>
	div {
		/* @apply border gap-1 p-1; */
	}
</style>

<script>
	import Crossfade from '$lib/Crossfade.svelte';
	import { items } from '$lib/stores';
	import { nanoid } from 'nanoid/non-secure';
	import Expand from '$lib/SVGs/Expand.svelte';

	if (!$items.length) {
		$items = [
			{
				children: [],
				id: nanoid(6)
			}
		];
	}
</script>

<div class="flex flex-row flex-wrap">
	{#if $items && $items.length}
		{#each $items as item, i}
			<Crossfade id={item.id}>
				<a href="/foo" class="select-none cursor-pointer" contenteditable={false}
					><div class="float-right top-0 right-0 h-6 w-6 m-1 text-neutral-800/50">
						<Expand />
					</div></a
				>
				{item.id}
			</Crossfade>
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

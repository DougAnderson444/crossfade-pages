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

<!-- This page div must be absolute so it doesnt jump when the crossfade happens -->
<!-- Insides are flexbox so it neatly organizes -->
<div class="absolute flex flex-row flex-wrap">
	{#if $items && $items.length}
		{#each $items as item, i}
			<Crossfade id={item.id}>
				<div
					class="flex flex-col flex-wrap w-24 h-24 m-2 bg-white border border-gray-200 rounded-lg shadow"
				>
					<a href="/foo" class="select-none cursor-pointer" contenteditable={false}
						><div class="float-right top-0 right-0 h-6 w-6 m-1 text-neutral-800/50">
							<Expand />
						</div></a
					>
					{item.id}
				</div>
			</Crossfade>
		{/each}
	{/if}
</div>

<style>
	div {
		/* @apply border gap-1 p-1; */
	}
</style>

<script>
	import Crossfade from '$lib/Crossfade.svelte';
	import { items } from '$lib/stores';
	import { nanoid } from 'nanoid/non-secure';
	import Expand from '$lib/SVGs/Expand.svelte';
	import { duration } from '$lib/crossfade';
	import { fade } from 'svelte/transition';

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
<div class="absolute flex flex-row flex-wrap ">
	{#if $items && $items.length}
		{#each $items as item, i}
			<Crossfade id={item.id}>
				<div
					class="flex-1 flex flex-col flex-wrap bg-red-500 m-4 p-2 rounded-lg shadow text-white"
					out:fade={{ duration }}
				>
					<a href="/{item.id}" class="w-24 h-24 select-none cursor-pointer" contenteditable={false}
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

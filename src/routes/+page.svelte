<script>
	import Node from '$lib/Node.svelte';
	import Crossfade from '$lib/Crossfade.svelte';
	import Sketched from '$lib/Themes/Sketched.svelte';
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
<div class="absolute flex flex-col flex-wrap h-full w-full items-stretch">
	{#if $items && $items.length}
		{#each $items as item, i}
			<!-- <Node> -->
			<Crossfade id={item.id}>
				<Sketched>
					<div class="flex-1 flex flex-col flex-wrap w-full h-full">
						<a href="/foo" class="select-none cursor-pointer" contenteditable={false}
							><div class="float-right top-0 right-0 h-6 w-6 m-1 text-neutral-800/50">
								<Expand />
							</div></a
						>
						{item.id}
					</div>
				</Sketched>
			</Crossfade>
			<!-- </Node> -->
		{/each}
	{/if}
</div>

<style>
	div {
		/* @apply border gap-1 p-1; */
	}
</style>

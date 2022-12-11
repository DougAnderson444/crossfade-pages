<script>
	import { base } from '$app/paths';
	import Crossfade from '$lib/Crossfade.svelte';
	import { data } from '$lib/stores';
	import Expand from '$lib/SVGs/Expand.svelte';
	import { duration } from '$lib/crossfade';
	import { fade } from 'svelte/transition';
	import BottomMenu from '$lib/Menu/BottomMenu.svelte';

	/**
	 * @type {string | number}
	 */
	export let pageId;
	let pageData;

	$: if ($data && pageId) pageData = $data[pageId];
</script>

<!-- This page div must be absolute so it doesnt jump when the crossfade happens -->
<!-- Insides are flexbox so it neatly organizes -->
<div
	class="absolute flex flex-row flex-wrap min-w-[24rem] min-h-[24rem] items-start"
	style:background-color={pageData?.color}
>
	{#if pageData && pageData.children && pageData.children.length}
		{#each pageData.children as page, p}
			<Crossfade id={page.id}>
				<div
					style:background-color={$data[page.id]?.color}
					class="flex-1 flex flex-col flex-wrap w-28 h-28  m-4 p-2 rounded-lg shadow text-white"
					out:fade={{ duration }}
				>
					<a href="{base}/{page.id}" class="select-none cursor-pointer" contenteditable={false}
						><div class="float-right top-0 right-0 h-6 w-6 m-1 text-neutral-800/50">
							<Expand />
						</div></a
					>
					<span class="text-xl text-white/50">{page.id}</span>
					{$data[page.id].children.length ? $data[page.id].children.length + ' Items' : ''}

					<!-- {$data[page.id]?.color} -->
				</div>
			</Crossfade>
		{/each}
	{/if}
</div>
<div class="w-full h-16">
	<BottomMenu {pageId} />
</div>

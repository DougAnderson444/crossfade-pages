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
	{#if pageId !== 'home'}
		<a href="{base}/" class="select-none cursor-pointer" contenteditable={false}>
			<div class="h-8 w-8 m-4">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 576 512"
					fill="currentColor"
					stroke="currentColor"
					><path
						d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40h-16c-1.1 0-2.2 0-3.3-.1-1.4.1-2.8.1-4.2.1H392c-22.1 0-40-17.9-40-40v-88c0-17.7-14.3-32-32-32h-64c-17.7 0-32 14.3-32 32v88c0 22.1-17.9 40-40 40h-55.9c-1.5 0-3-.1-4.5-.2-1.2.1-2.4.2-3.6.2h-16c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9.1-2.8v-69.6H32c-18 0-32-14-32-32.1 0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7l255.4 224.5c8 7 12 15 11 24z"
					/>
				</svg>
			</div></a
		>
	{/if}
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

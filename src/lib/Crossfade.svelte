<script lang="ts">
	import { crossfade, selected } from '$lib/crossfade';

	export let id: any;
	export let styling = ' ';

	const [send, receive] = crossfade;

	/**
	 * @param {KeyboardEvent | MouseEvent & { currentTarget: EventTarget & HTMLDivElement; }} event
	 */
	function handleNavigate(event) {
		const target = event?.target;
		if (!target) return;
		const closestItem = ((target as HTMLElement).closest('[data-id]') as HTMLElement)?.dataset.id;
		$selected = closestItem || ('' as string);
	}
</script>

{#if styling}
	<!-- Crossfade Component -->
	<div
		out:send={{ key: id }}
		in:receive={{ key: id }}
		on:click={handleNavigate}
		on:keypress={handleNavigate}
		data-id={id}
		class=" {styling} outline-none select-none"
		contenteditable={false}
	>
		<slot {handleNavigate} />
	</div>
{/if}

<style>
	div {
		/* @apply border gap-1 p-1; */
	}
</style>

<script lang="ts">
	import { crossfade, selected } from '$lib/crossfade';

	export let id: any;

	const [send, receive] = crossfade;

	/**
	 * @param {KeyboardEvent | MouseEvent & { currentTarget: EventTarget & HTMLDivElement; }} event
	 */
	function handleNavigate(event) {
		const target = event?.target;
		if (!target) return;
		const closestItem = ((target as HTMLElement).closest('[data-id]') as HTMLElement)?.dataset.id;
		console.log('handle click', { closestItem });
		$selected = closestItem || ('' as string);
	}
</script>

<div
	out:send={{ key: id }}
	in:receive={{ key: id }}
	on:click={handleNavigate}
	on:keypress={handleNavigate}
	data-id={id}
	class="flex-0 relative"
	contenteditable="true"
	style="border: 1px solid crimson; width: 100px; height: 100px; display: block; grid-area: 1/1;"
>
	<slot {handleNavigate} />
</div>

<style>
	div {
		/* @apply border gap-1 p-1; */
	}
</style>

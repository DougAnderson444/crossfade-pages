<script lang="ts">
	import { crossfade } from '$lib/crossfade';

	export let id: any;
	export let styling = ' ';

	const [send, receive] = crossfade;
</script>

{#if styling}
	<div
		out:send={{ key: id }}
		in:receive={{ key: id }}
		data-id={id}
		class=" {styling} outline-none select-none"
		contenteditable={false}
	>
		<slot />
	</div>
{/if}

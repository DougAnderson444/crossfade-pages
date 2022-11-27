<script>
	import '../app.css';
	import BottomMenu from '$lib/Menu/BottomMenu.svelte';
	import FillVertical from '@douganderson444/svelte-fillvert';
</script>

<FillVertical>
	<main class="flex flex-col h-full w-full" data-sveltekit-prefetch>
		<div class="flex-1">
			<slot />
		</div>
		<div class="w-full h-16">
			<BottomMenu />
		</div>
	</main>
</FillVertical>

<script>
	import '../app.css';
	import BottomMenu from '$lib/Menu/BottomMenu.svelte';
	import FillVertical from '@douganderson444/svelte-fillvert';
</script>

<FillVertical>
	<main class="flex flex-col h-full">
		<div class="w-full h-full border-2 border-green-500 items-center justify-items-center">
			<slot />
		</div>
		<div class="w-full h-16">
			<BottomMenu />
		</div>
	</main>
</FillVertical>

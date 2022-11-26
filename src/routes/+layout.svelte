<script>
	import '../app.css';
	import BottomMenu from '$lib/Menu/BottomMenu.svelte';
	import FillVertical from '@douganderson444/svelte-fillvert';
</script>

<FillVertical>
	<div class="relative w-full h-screen border-2 border-green-500 items-center justify-items-center">
		<slot />
		<BottomMenu />
	</div>
</FillVertical>

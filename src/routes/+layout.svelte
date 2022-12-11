<script>
	import '../app.css';
	import FillVertical from '@douganderson444/svelte-fillvert';
</script>

<FillVertical>
	<main class="flex flex-col h-full w-full" data-sveltekit-prefetch>
		<slot />
	</main>
</FillVertical>

<script>
	import '../app.css';
	import FillVertical from '@douganderson444/svelte-fillvert';
</script>

<FillVertical>
	<main class="flex flex-col h-full w-full border-4 border-slate-400">
		<slot />
	</main>
</FillVertical>

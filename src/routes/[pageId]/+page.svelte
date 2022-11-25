<script>
	import { crossfade } from '$lib/crossfade';

	/** @type {import('./$types').PageData} */
	export let data;

	const [send, receive] = crossfade;
</script>

<a
	out:send={{ key: 'a' }}
	in:receive={{ key: 'a' }}
	style="border: 10px solid crimson; width: 200px; height: 200px; display: block; grid-area: 1/1;"
	href="/">Go to /</a
>

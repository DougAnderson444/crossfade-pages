<script>
	import { pages } from '$lib/stores.js';
	import { crossfade } from '$lib/crossfade';
	const [send, receive] = crossfade;
</script>

<a
	out:send={{ key: 'a' }}
	in:receive={{ key: 'a' }}
	style="border: 1px solid crimson; width: 100px; height: 100px; display: block; grid-area: 1/1;"
	href="/foo">Go to foo</a
>

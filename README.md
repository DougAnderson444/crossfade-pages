# Svelte Crossfade Pages

A simple example app of how to fade between routing pages in Svelte.

You can use dynamic routing with adapter-static, so this should work with static servers like Github Pages.

This demo allows you to create a bunch of links to pages, pages which are created and named on the fly, and navigate to those pages. The pages cross fade and the URL changes as you navigate.

# API

```js
import { Crossfade, Page } from '@douganderson444/crossfade-pages';

// data helpers
import { createNewPage, addNewChild } from '@douganderson444/crossfade-pages';
```

## Home page: `src/routes/index.svelte`

```svelte
<script>
	import Crossfade from '$lib/Crossfade.svelte';

	import Page from '$lib/Page.svelte';
	import { data } from '$lib/stores';
	import { createNewPage } from '$lib/utils';

	let pageId = 'home'; // manually set the pageId to home

	if (!$data) $data = createNewPage(pageId);
</script>

<Crossfade id={pageId} styling={'absolute w-96 h-96 z-20'}>
	<Page {pageId} />
</Crossfade>
```

## Nested Pages: `src/routes/[pageId]/[...pageId].svelte`

```svelte
<script>
	import Crossfade from '$lib/Crossfade.svelte';

	import Page from '$lib/Page.svelte';
	import { data } from '$lib/stores';
	import { createNewPage, addNewChild } from '$lib/utils';

	let pageId = $params.pageId; // get the pageId from the URL

	if (!$data) $data = createNewPage(pageId);
</script>

<Crossfade id={pageId} styling={'absolute w-96 h-96 z-20'}>
	<Page {pageId} />
</Crossfade>
```

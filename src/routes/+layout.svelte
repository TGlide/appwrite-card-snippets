<script lang="ts">
	import { page } from '$app/stores';
	import { examples } from '$lib/examples';
	import '../app.postcss';

	$: pathname = $page.url.pathname;
</script>

<svelte:head>
	<title>Appwrite Card Snippets</title>
</svelte:head>

<main
	class="mx-auto flex h-screen max-w-[1440px] grid-cols-12 flex-col overflow-hidden p-4 qhd:grid"
>
	<div class="col-span-12 flex justify-center">
		<ol
			class="flex min-w-[200px] items-center gap-2 rounded-[8px] border border-zinc-700 bg-zinc-900 p-1"
		>
			{#each Object.keys(examples) as example}
				<li>
					<a
						class="rounded-[6px] px-2 py-1 capitalize hover:underline
					{pathname === `/${example}` && 'bg-pink-600'}"
						href="/{example}"
					>
						{example}
					</a>
				</li>
			{/each}
		</ol>
	</div>

	<slot />
</main>

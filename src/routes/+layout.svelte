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
	class="qhd:grid mx-auto flex h-screen max-w-[1440px] grid-cols-12 flex-col overflow-hidden p-4"
>
	<div class="col-span-12 flex justify-center">
		<ol
			class="flex min-w-[200px] items-center gap-2 rounded-md border border-zinc-700 bg-zinc-900 p-4"
		>
			{#each Object.keys(examples) as example}
				<li>
					<a
						class="rounded-md px-1 py-0.5 capitalize hover:underline
					{pathname === `/${example}` && 'bg-pink-900'}"
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

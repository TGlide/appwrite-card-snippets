<script lang="ts">
	import { HighlightSvelte } from 'svelte-highlight';
	import theme from 'svelte-highlight/styles/tokyo-night-dark';

	export let data;

	let copied = false;
	function handleCopy() {
		copied = true;
		navigator.clipboard.writeText(data.example.code);
		setTimeout(() => (copied = false), 2000);
	}
</script>

<svelte:head>
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html theme}
</svelte:head>

<div class="relative z-10 mt-8 grid place-items-center">
	<svelte:component this={data.example.component} />
</div>

<div class="relative mx-auto mt-8 h-96 w-full max-w-3xl overflow-hidden rounded-md">
	<button class="absolute right-4 top-4 transition hover:opacity-75" on:click={handleCopy}>
		{copied ? 'Copied!' : 'Copy'}
	</button>
	<div class="h-full overflow-auto">
		<HighlightSvelte code={data.example.code} />
	</div>
</div>

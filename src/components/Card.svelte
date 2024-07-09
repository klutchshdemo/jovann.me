<script>
	import CardWrapper from './CardWrapper.svelte';

	export let title = '';
	export let description = '';
	export let footer = '';
	export let thumbnail = '';
	export let href = '';
	export let fit = 'cover';
	export let loading = false;
</script>

<CardWrapper {href}>
	{#if loading}
		<div class="bg-surface-500 h-64"></div>
	{/if}

	{#if thumbnail}
		<img
			src={thumbnail}
			alt={title}
			style="object-fit: {fit};"
			class="h-64 w-full {fit === 'contain' ? 'p-12 bg-surface-500' : ''}"
			on:error={() => (loading = true)}
		/>
	{:else}
		<img
			src="/images/jovannmc_white.png"
			alt={title}
			style="object-fit: contain;"
			class="h-64 w-full p-12 bg-surface-500"
			on:error={() => (loading = true)}
		/>
	{/if}

	<div class="flex flex-col justify-between p-4 h-40">
		<h3 class="text-xl font-bold mb-2">{title}</h3>
		<p class="text-surface-300 mb-2">{description}</p>
		<p class="text-surface-400 text-sm">{footer}</p>
	</div>
</CardWrapper>

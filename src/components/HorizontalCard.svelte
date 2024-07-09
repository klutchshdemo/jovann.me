<script>
	export let title = '';
	export let description = '';
	export let footer = '';
	export let thumbnail = '';
	export let href = '';
	export let loading = false;
</script>

{#if href}
	<a class="horizontal-card hoverable bg-surface-800 rounded-lg shadow-md overflow-hidden flex" {href} target="_blank">
		{#if loading}
			<div class="flex justify-center items-center thumbnail bg-surface-500 min-w-24"></div>
		{/if}

		{#if thumbnail}
			<div class="flex justify-center items-center thumbnail bg-surface-500 min-w-24">
				<img src={thumbnail} alt={title} class="object-contain w-16 h-16" on:error={() => (loading = false)} />
			</div>
		{/if}

		<div class="flex flex-col justify-between p-4 flex-grow">
			<h3 class="text-xl font-bold mb-2">{title}</h3>
			<p class="text-surface-300 mb-2">{description}</p>
			<p class="text-surface-400 text-sm">{footer}</p>
		</div>
	</a>
{:else}
	<div class="horizontal-card bg-surface-800 rounded-lg shadow-md overflow-hidden flex">
		{#if loading}
			<div class="flex justify-center items-center thumbnail bg-surface-500 min-w-24"></div>
		{/if}

		{#if thumbnail}
			<div class="flex justify-center items-center thumbnail bg-surface-500 min-w-24">
				<img src={thumbnail} alt={title} class="object-contain w-16 h-16" on:error={() => (loading = false)} />
			</div>
		{/if}

		<div class="flex flex-col justify-between p-4 flex-grow">
			<h3 class="text-xl font-bold mb-2">{title}</h3>
			<p class="text-surface-300 mb-2">{description}</p>
			<p class="text-surface-400 text-sm">{footer}</p>
		</div>
	</div>
{/if}

<style>
	.horizontal-card.hoverable {
		transition:
			transform 0.3s ease,
			box-shadow 0.3s ease;
		transform: scale(1);
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	}

	.horizontal-card.hoverable:hover,
	.horizontal-card.hoverable:active,
	.horizontal-card.hoverable:focus {
		transform: scale(1.05);
		box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
	}
</style>

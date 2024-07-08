<script>
	export let title = '';
	export let description = '';
	export let footer = '';
	export let thumbnail = '';
	export let loading = false;
</script>

<div class="card bg-surface-800 rounded-lg shadow-md overflow-hidden" tabindex="-1">
	{#if loading}
		<div class="bg-surface-500 h-64"></div>
	{/if}
	
	{#if thumbnail}
		<img src={thumbnail} alt={title} class="h-64 object-cover w-full" on:error={() => (loading = false)} />
	{/if}

	<div class="flex flex-col justify-between p-4 h-40">
		<h3 class="text-xl font-bold mb-2">{title}</h3>
		<p class="text-surface-300 mb-2">{description}</p>
		<p class="text-surface-400 text-sm">{footer}</p>
	</div>
</div>

<style>
	.card {
		transition:
			transform 0.3s ease,
			box-shadow 0.3s ease;
		transform: scale(1);
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	}

	.card:hover,
	.card:active,
	.card:focus {
		transform: scale(1.05);
		box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
	}
</style>

<script>
	export let title = '';
	export let id = '';
</script>

<div class="container mx-auto flex flex-col items-center py-8" {id}>
	<div class="w-11/12 bg-surface-700 text-white p-6 lg:py-10 lg:px-16 rounded-lg shadow-lg">
		{#if title}
			<h2 class="text-4xl font-bold text-center mb-6 lg:mb-8">{title}</h2>
		{/if}
		<slot></slot>
	</div>
</div>

<script>
	export let title = '';
	export let id = '';
</script>

<div class="container mx-auto flex flex-col items-center min-h-[60vh] py-8" {id}>
	<div class="w-11/12 bg-surface-700 text-white p-8 rounded-lg shadow-lg">
		{#if title}
			<h2 class="text-4xl font-bold text-center mb-6">{title}</h2>
		{/if}
		<slot></slot>
	</div>
</div>

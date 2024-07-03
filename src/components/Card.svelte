<script>
	export let title = '';
	export let description = '';
	export let footer = '';
</script>

<div class="bg-surface-800 rounded-lg shadow-md overflow-hidden">
	<div class="bg-surface-500 h-40"></div>
	<!-- Placeholder for thumbnail -->
	<div class="p-4">
		<h3 class="text-xl font-bold mb-2">{title}</h3>
		<p class="text-surface-300 mb-2">{description}</p>
		<p class="text-surface-400 text-sm">{footer}</p>
	</div>
</div>

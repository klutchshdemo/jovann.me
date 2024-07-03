<script>
	export let text = '';
	export let additionalClasses = '';
</script>

<div class="mt-8 text-center">
	<button class={`btn btn-lg mt-4 bg-secondary-900 font-semibold text-xl ${additionalClasses}`}>
		{text}
	</button>
</div>

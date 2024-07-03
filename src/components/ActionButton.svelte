<script>
	export let text = '';
	export let additionalClasses = '';
	export let href = '';
</script>

<div class="mt-8 text-center">
	<a href={`${href}`} class={`btn btn-lg mt-4 bg-secondary-900 font-semibold text-xl ${additionalClasses}`}>
		{text}
	</a>
</div>

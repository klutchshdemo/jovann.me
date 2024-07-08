<script lang="ts">
	export let sections: { title: string; items: string[] }[] = [];
</script>

{#each sections as section, index}
	<div class="flex flex-col text-xl">
		{#if section.title}
			<span
				class={index === 0 ? 'text-center lg:text-left font-bold mb-2' : 'text-center lg:text-left font-bold mt-6 mb-2'}
				>{section.title}</span
			>
		{/if}
		<ul class="flex flex-col gap-y-2 list-disc list-inside">
			{#each section.items as item}
				<li>{item}</li>
			{/each}
		</ul>
	</div>
{/each}

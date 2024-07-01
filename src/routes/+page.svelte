<script>
	import { onMount } from 'svelte';
	import TypeIt from 'typeit';

	onMount(() => {
		const phrases = [
			{ text: 'hates', deleteAfter: 150, typeAfter: 200 },
			{ text: 'loves technology', deleteAfter: 650, typeAfter: 650 },
			{ text: 'creates content', deleteAfter: 650, typeAfter: 650 },
			{ text: 'sucks at programming', deleteAfter: 650, typeAfter: 650 }
		];

		const typeItInstance = new TypeIt('#typewriter', {
			lifeLike: false,
			speed: 80,
			deleteSpeed: 40,
			loop: true,
			loopDelay: 650
		});

		phrases.forEach(({ text, deleteAfter, typeAfter }) => {
			typeItInstance.type(text).pause(deleteAfter).delete(text.length).pause(typeAfter);
		});

		typeItInstance.go();
	});
</script>

<div
	class="container mx-auto flex flex-col justify-center items-center"
	style="min-height: calc(100vh - var(--navbar-height));"
>
	<div class="text-center w-full md:w-5/12">
		<h1 class="text-4xl font-bold">Hey!</h1>
		<p class="text-xl mt-2">
			I'm <b>JovannMC</b>. I'm just another person that <span class="font-bold" id="typewriter"></span>.
			<!-- No JS -->
			<noscript
				><del>hates</del> loves <b>technology</b>, creates <b>content</b>, and sucks at
				<b>programming</b>.</noscript
			>
		</p>
	</div>
</div>

<!-- About Me Section -->
<div class="container mx-auto flex flex-col items-center min-h-[60vh]">
	<div class="about-me w-full md:w-5/12 text-center">
		<h2 class="text-3xl font-bold">About Me</h2>
		<p class="text-xl mt-2">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
			magna aliqua.
		</p>
	</div>
</div>

<!-- Showcase Project Section -->
<div class="container mx-auto flex flex-col items-center min-h-[60vh]">
	<div class="showcase-project w-full md:w-5/12 text-center">
		<h2 class="text-3xl font-bold">Featured Project</h2>
		<p class="text-xl mt-2">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
			magna aliqua.
		</p>
		<!-- Project details and link -->
	</div>
</div>

<!-- Featured Video Section -->
<div class="container mx-auto flex flex-col items-center min-h-[60vh]">
	<div class="featured-video w-full md:w-5/12 text-center">
		<h2 class="text-3xl font-bold">Featured Video</h2>
		<p class="text-xl mt-2">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
			magna aliqua.
		</p>
		<!-- Embed video -->
	</div>
</div>

<!-- Contact Me Section -->
<div class="container mx-auto flex flex-col items-center min-h-[60vh]">
	<div class="contact-me w-full md:w-5/12 text-center">
		<h2 class="text-3xl font-bold">Contact</h2>
		<p class="text-xl mt-2">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
			magna aliqua.
		</p>
		<button class="btn mt-4 bg-secondary-900 font-semibold text-sm"> Contact Me </button>
	</div>
</div>

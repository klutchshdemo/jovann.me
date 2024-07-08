<script lang="ts">
	import { onMount } from 'svelte';
	import TypeIt from 'typeit';

	import Container from '../components/Container.svelte';
	import Card from '../components/Card.svelte';
	import ActionButton from '../components/ActionButton.svelte';
	import CardImage from '../components/CardImage.svelte';

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

<section class="content">
	<div class="flex flex-col justify-center items-center" style="min-height: calc(100vh - var(--navbar-height));">
		<div class="text-center w-10/12 lg:w-1/2">
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

	<div class="scroll-indicator">
		<svg class="w-7 h-7 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
		</svg>
	</div>
</section>

<!-- TODO: add fade in scrolling effect? -->

<!-- About me Section -->
<Container title="A little about me!">
	<p class="text-xl text-center mb-6">
		I'm a 15 year old from the Philippines that grew up with technology, gaming, and the internet at a young age. I love
		learning new things, starting projects I never finish, and hanging out with friends (especially in VR)! I do content
		creation, program stuff, and self-host random services on my "funny" project domain. Some of my "skills" are below!
	</p>
	<div class="flex flex-col lg:flex-row items-center justify-center lg:gap-16">
		<!-- Image placeholders -->
		<div class="grid grid-cols-2 gap-4">
			<CardImage aspectRatio="1:1" loading={true} />
			<CardImage aspectRatio="1:1" loading={true} />
			<CardImage aspectRatio="1:1" loading={true} />
			<CardImage aspectRatio="1:1" loading={true} />
		</div>
		<div class="mt-6 lg:mt-0 text-center lg:text-left">
			<ul class="flex flex-col list-disc list-inside text-xl gap-y-4">
				<li>15 years of life (via Earth)</li>
				<li>1 year of content creation (video editing + thumbnails)</li>
				<li>1 year of self-hosting services</li>
				<span class="text-center font-bold lg:text-left">and</span>
				<li>4 years of Java (via SpigotMC)</li>
				<li>3 years of C# (via Unity)</li>
				<li>2 years of JS/TS (via multiple projects)</li>
				<li>1 year of web development</li>
			</ul>
		</div>
	</div>
</Container>

<!-- Featured projects section -->
<Container title="Some of my work..">
	<div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
		<Card
			title="Project Title 1"
			description="Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur."
			footer="Software"
		/>
		<Card
			title="Project Title 2"
			description="Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur."
			footer="Software"
		/>
		<Card
			title="Project Title 3"
			description="Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur."
			footer="Software"
		/>
	</div>
	<ActionButton text="Projects" href="/projects" />
</Container>

<!-- Featured videos section -->
<Container title="..and some of my videos too!">
	<div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
		<Card
			title="Video Title 1"
			description="Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur."
			footer="September 23, 2023"
		/>
		<Card
			title="Video Title 2"
			description="Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur."
			footer="September 23, 2023"
		/>
		<Card
			title="Video Title 3"
			description="Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur."
			footer="September 23, 2023"
		/>
	</div>
	<ActionButton text="Videos" href="/videos" />
</Container>

<!-- Contact section -->
<Container title="Contact">
	<p class="text-xl text-center mb-6">
		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna
		aliqua.
	</p>
	<ActionButton text="Contact" href="/contact" />
</Container>

<br><br>

<style>
	.content {
		position: relative;
		overflow: hidden;
	}
	.scroll-indicator {
		position: absolute;
		bottom: 1rem;
		left: 50%;
		transform: translateX(-50%);
		z-index: 10;
	}
</style>

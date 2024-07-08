<script lang="ts">
	import { onMount } from 'svelte';
	import TypeIt from 'typeit';

	import Container from '../components/Container.svelte';
	import Card from '../components/Card.svelte';
	import ResponsiveImage from '../components/ResponsiveImage.svelte';
	import ActionButton from '../components/ActionButton.svelte';

	onMount(() => {
		const phrases = [
			{ text: 'hates', deleteAfter: 150, typeAfter: 200 },
			{ text: 'loves technology', deleteAfter: 650, typeAfter: 650 },
			{ text: 'creates content', deleteAfter: 650, typeAfter: 650 },
			{ text: 'sucks at programming', deleteAfter: 650, typeAfter: 650 },
			{ text: 'is gay af', deleteAfter: 80, typeAfter: 350 }
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
	<p class="text-xl text-center">
		I'm a 15 year old from the Philippines that grew up with technology, gaming, and the internet at a young age. I love
		learning new things, starting projects I never finish, and hanging out with friends (especially in VR)! I do content
		creation, program stuff, and self-host random services on my "funny" project domain. Some of my "skills" are below!
	</p>
	<div class="flex flex-col lg:flex-row items-center justify-center lg:gap-16">
		<ResponsiveImage src="/images/jovann_hi.png" width="20rem" aspectRatio="1:1" transparent={true} />
		<div class="mt-6 lg:mt-0 text-center lg:text-left">
			<ul class="flex flex-col list-disc list-inside text-xl gap-y-3">
				<li>15 years of life (via Earth)</li>
				<li>1 year of content creation (video editing + thumbnails)</li>
				<li>1 year of self-hosting services</li>
				<span class="text-center lg:text-left font-bold">and</span>
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
	<div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-4">
		<Card
			title="Project Title 1"
			description="Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur."
			footer="Software"
			thumbnail="/images/projects/jovannillo.png"
		/>
		<Card
			title="Project Title 2"
			description="Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur."
			footer="Software"
			thumbnail="/images/projects/slimetora_icon.png"
		/>
		<Card
			title="Project Title 3"
			description="Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur."
			footer="Software"
			thumbnail="/images/projects/saladsim1.png"
		/>
	</div>
	<ActionButton text="Projects" href="/projects" />
</Container>

<!-- Featured videos section -->
<Container title="..and my videos too!">
	<div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-4">
		<Card
			title="Video Title 1"
			description="Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur."
			footer="September 23, 2023"
			thumbnail="/images/projects/joevan.png"
		/>
		<Card
			title="Video Title 2"
			description="Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur."
			footer="September 23, 2023"
			thumbnail="/images/projects/good speed.png"
		/>
		<Card
			title="Video Title 3"
			description="Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur."
			footer="September 23, 2023"
			thumbnail="/images/projects/joe biden good.jpg"
		/>
	</div>
	<ActionButton text="Videos" href="/videos" />
</Container>

<!-- Contact section -->
<Container title="Contact">
	<p class="text-xl text-center justify-center">
		That's some of my stuff - did you like my work? Want to contact me? Maybe to sponsor me or give me free stuff? (I
		wish)<br />
		Head over to the contact page to see all the (hundred) platforms you could use to contact me!
	</p>
	<div class="flex flex-col lg:flex-row items-center justify-center content-center lg:gap-16">
		<ResponsiveImage src="/images/jovann_pout.png" width="20rem" aspectRatio="1:1" transparent={true} />
		<div class="mt-6 lg:mt-0 text-center lg:text-left">
			<div class="flex flex-col text-xl">
				<span class="text-center lg:text-left font-bold mt-0 mb-2">You could contact to:</span>
				<ul class="flex flex-col gap-y-2 list-disc list-inside">
					<li>get to know me and become friends :D</li>
					<li>ask for help on something I made/host</li>
					<li>suggest ideas for my next projects</li>
					<li>report an issue on one of my current projects</li>
				</ul>
				<span class="text-center lg:text-left font-bold mt-8 mb-2">You can't contact to:</span>
				<ul class="flex flex-col gap-y-2 list-disc list-inside">
					<li>buy your (or give you) stuff; you'd be surprised</li>
					<li>get mad at me for who I am; tough luck</li>
				</ul>
			</div>
		</div>
	</div>

	<ActionButton text="Contact" href="/contact" />
</Container>

<br /><br />

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

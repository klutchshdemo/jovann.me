<script>
	import { onMount } from 'svelte';
	import TypeIt from 'typeit';

	import Container from '../components/Container.svelte';
	import Card from '../components/Card.svelte';
	import ActionButton from '../components/ActionButton.svelte';
	import ImageCard from '../components/ImageCard.svelte';

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

<div class="flex flex-col justify-center items-center" style="min-height: calc(100vh - var(--navbar-height));">
	<div class="text-center w-10/12 md:w-1/2">
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
<Container title="A little about me..">
	<p class="text-xl text-center mb-6">
		I'm a 15 year old from the Philippines that grew up with technology, gaming, and the internet at a young age. I love
		learning new things, starting projects I never finish, and hanging out with friends (especially in VR)! I do content
		creation, program stuff, and self-host random services on my "funny" project domain. Some of my "skills" are below!
	</p>
	<div class="flex flex-col lg:flex-row items-center justify-center md:gap-16">
		<!-- Image placeholders -->
		<div class="grid grid-cols-2 gap-4">
			<ImageCard aspectRatio="1:1" loading={true} />
			<ImageCard aspectRatio="1:1" loading={true} />
			<ImageCard aspectRatio="1:1" loading={true} />
			<ImageCard aspectRatio="1:1" loading={true} />
		</div>
		<div class="mt-6 lg:mt-0 text-center lg:text-left">
			<ul class="flex flex-col list-disc list-inside text-xl gap-y-4">
				<li>15 years of life (via Earth)</li>
				<li>1 year of content creation (video editing + thumbnails)</li>
				<li>1 year of self-hosting services</li>
				<span class="text-center font-bold lg:text-left">and</span>
				<li>3 years of Java (via SpigotMC)</li>
				<li>3 years of C# (via Unity)</li>
				<li>2 years of JS/TS (via multiple projects)</li>
				<li>1 year of web development</li>
			</ul>
		</div>
	</div>
</Container>

<Container title="Featured Projects">
	<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
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
	<ActionButton text="Projects" href="/projects"/>
</Container>

<Container title="Featured Videos">
	<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
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

<Container title="Contact">
	<p class="text-xl text-center mb-6">
		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna
		aliqua.
	</p>
	<ActionButton text="Contact" href="/contact"/>
</Container>

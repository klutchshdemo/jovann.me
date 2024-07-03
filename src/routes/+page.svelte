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
<div class="container mx-auto flex flex-col items-center min-h-[60vh] py-8">
	<div class="about-me w-11/12 bg-surface-700 text-white p-8 rounded-lg shadow-lg">
		<h2 class="text-4xl font-bold text-center mb-4">A little about me..</h2>
		<p class="text-xl text-center mb-6">
			I'm a 15 year old from the Philippines that grew up with technology, gaming, and the internet at a young age. I
			love learning new things, starting projects I never finish, and hanging out with friends (especially in VR)! I do
			content creation, program stuff, and self-host random services on my "funny" project domain. Some of my "skills"
			are below!
		</p>
		<div class="flex flex-col lg:flex-row items-center justify-center md:gap-16">
			<!-- Image placeholders -->
			<div class="grid grid-cols-2 gap-4">
				<div class="w-24 h-24 md:w-40 md:h-40 bg-surface-400 rounded-lg"></div>
				<div class="w-24 h-24 md:w-40 md:h-40 bg-surface-400 rounded-lg"></div>
				<div class="w-24 h-24 md:w-40 md:h-40 bg-surface-400 rounded-lg"></div>
				<div class="w-24 h-24 md:w-40 md:h-40 bg-surface-400 rounded-lg"></div>
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
		<div class="mt-8 text-center">
			<button class="btn btn-lg mt-4 bg-secondary-900 font-semibold text-xl"> About </button>
		</div>
	</div>
</div>

<!-- Featured Projects Section -->
<div class="container mx-auto flex flex-col items-center min-h-[60vh] py-8">
	<div class="latest-videos w-11/12 bg-surface-700 text-white p-8 rounded-lg shadow-lg">
		<h2 class="text-4xl font-bold text-center mb-6">Featured Projects</h2>
		<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
			<!-- Video Card 1 -->
			<div class="bg-surface-800 rounded-lg shadow-md overflow-hidden">
				<div class="bg-surface-500 h-40"></div>
				<!-- Placeholder for video thumbnail -->
				<div class="p-4">
					<h3 class="text-xl font-bold mb-2">Project Title 1</h3>
					<p class="text-surface-300 mb-2">
						Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.
					</p>
					<p class="text-surface-400 text-sm">Software</p>
				</div>
			</div>
			<!-- Video Card 2 -->
			<div class="bg-surface-800 rounded-lg shadow-md overflow-hidden">
				<div class="bg-surface-500 h-40"></div>
				<!-- Placeholder for video thumbnail -->
				<div class="p-4">
					<h3 class="text-xl font-bold mb-2">Project Title 2</h3>
					<p class="text-surface-300 mb-2">
						Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.
					</p>
					<p class="text-surface-400 text-sm">Software</p>
				</div>
			</div>
			<!-- Video Card 3 -->
			<div class="bg-surface-800 rounded-lg shadow-md overflow-hidden">
				<div class="bg-surface-500 h-40"></div>
				<!-- Placeholder for video thumbnail -->
				<div class="p-4">
					<h3 class="text-xl font-bold mb-2">Project Title 3</h3>
					<p class="text-surface-300 mb-2">
						Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.
					</p>
					<p class="text-surface-400 text-sm">Software</p>
				</div>
			</div>
		</div>
		<div class="mt-8 text-center">
			<button class="btn btn-lg mt-4 bg-secondary-900 font-semibold text-xl"> Projects </button>
		</div>
	</div>
</div>

<!-- Featured Videos Section -->
<div class="container mx-auto flex flex-col items-center min-h-[60vh] py-8">
	<div class="latest-videos w-11/12 bg-surface-700 text-white p-8 rounded-lg shadow-lg">
		<h2 class="text-4xl font-bold text-center mb-6">Featured Videos</h2>
		<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
			<!-- Video Card 1 -->
			<div class="bg-surface-800 rounded-lg shadow-md overflow-hidden">
				<div class="bg-surface-500 h-40"></div>
				<!-- Placeholder for video thumbnail -->
				<div class="p-4">
					<h3 class="text-xl font-bold mb-2">Video Title 1</h3>
					<p class="text-surface-300 mb-2">
						Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.
					</p>
					<p class="text-surface-400 text-sm">September 23, 2023</p>
				</div>
			</div>
			<!-- Video Card 2 -->
			<div class="bg-surface-800 rounded-lg shadow-md overflow-hidden">
				<div class="bg-surface-500 h-40"></div>
				<!-- Placeholder for video thumbnail -->
				<div class="p-4">
					<h3 class="text-xl font-bold mb-2">Video Title 2</h3>
					<p class="text-surface-300 mb-2">
						Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.
					</p>
					<p class="text-surface-400 text-sm">September 23, 2023</p>
				</div>
			</div>
			<!-- Video Card 3 -->
			<div class="bg-surface-800 rounded-lg shadow-md overflow-hidden">
				<div class="bg-surface-500 h-40"></div>
				<!-- Placeholder for video thumbnail -->
				<div class="p-4">
					<h3 class="text-xl font-bold mb-2">Video Title 3</h3>
					<p class="text-surface-300 mb-2">
						Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.
					</p>
					<p class="text-surface-400 text-sm">September 23, 2023</p>
				</div>
			</div>
		</div>
		<div class="mt-8 text-center">
			<button class="btn btn-lg mt-4 bg-secondary-900 font-semibold text-xl"> Videos </button>
		</div>
	</div>
</div>

<!-- Contact Me Section -->
<div class="container mx-auto flex flex-col items-center min-h-[60vh]">
	<div class="contact-me w-10/12 text-center">
		<h2 class="text-3xl font-bold">Contact</h2>
		<p class="text-xl mt-2">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
			magna aliqua.
		</p>
		<button class="btn mt-4 bg-secondary-900 font-semibold text-sm"> Contact Me </button>
	</div>
</div>

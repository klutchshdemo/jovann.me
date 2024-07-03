<script>
	const socialLinks = [
		{ name: 'Discord', url: '/images/socials/discord.svg', link: 'https://discord.com/invite/fPrjXeN9fe' },
		{ name: 'Matrix', url: '/images/socials/matrix.svg', link: 'https://matrix.to/#/@jovannmc:tchncs.de' },
		{ name: 'GitHub', url: '/images/socials/github.svg', link: 'https://github.com/JovannMC' },
		{ name: 'Twitter', url: '/images/socials/twitter.svg', link: 'https://twitter.com/JovannMC' },
		{ name: 'Mastodon', url: '/images/socials/mastodon.svg', link: 'https://mastodon.femboyfurry.net/@JovannMC' },
		{ name: 'YouTube', url: '/images/socials/youtube.svg', link: 'https://youtube.com/@JovannMC' },
		{ name: 'Vanillo', url: '/images/socials/vanillo.svg', link: 'https://vanillo.tv/u/JovannMC' },
		{ name: 'Twitch', url: '/images/socials/twitch.svg', link: 'https://twitch.tv/JovannMC' },
		{ name: 'PeerTube', url: '/images/socials/peertube.svg', link: 'https://vid.femboyfurry.net/c/jovannmc' },
		{ name: 'Odysee', url: '/images/socials/odysee.svg', link: 'https://odysee.com/@JovannMC:7' }
	];

	let firstRowLinks = socialLinks.slice(0, Math.ceil(socialLinks.length / 2));
	let secondRowLinks = socialLinks.slice(Math.ceil(socialLinks.length / 2));
</script>

<footer class="bg-surface-800 text-white py-4">
	<div class="container mx-auto px-4">
		<div class="flex flex-col md:flex-row justify-around items-center space-y-4 md:space-y-0">
			<!-- Logo and message -->
			<div class="flex-1 px-2 text-center md:text-left md:ml-4">
				<img src="/images/jovannmc_white.png" alt="Logo" class="h-10 mb-4 mx-auto md:mx-0" />
				<p class="w-full md:w-9/12 mx-auto md:mx-0">
					Hey, thanks for scrolling to the end of the page. The site is <a
						href="https://github.com/JovannMC/jovann.me"
						target="_blank"
						class="text-blue-400">open source</a
					>, maybe check it out?
				</p>
			</div>

			<!-- Links -->
			<div class="flex-1 flex justify-center items-start px-2">
				<div class="w-full text-center">
					<h3 class="font-bold mb-2">Cool links</h3>
					<ul class="flex flex-row md:flex-col md:gap-1 gap-6 justify-center">
						<li><a href="https://litdevs.org/" class="hover:underline" target="_blank">LIT Devs</a></li>
						<li><a href="https://github.com/OCSYT/SlimeTora" class="hover:underline" target="_blank">SlimeTora</a></li>
						<li><a href="https://github.com/SlimeVR/" class="hover:underline" target="_blank">SlimeVR</a></li>
					</ul>
				</div>
			</div>

			<!-- Social media icons -->
			<div class="flex-1 text-center md:text-right px-2">
				<div>
					<h3 class="font-bold mb-4 md:mb-2">Find me</h3>
					<!-- First row of icons -->
					<div class="flex justify-end md:gap-4 gap-8 md:mb-2 mb-4">
						{#each firstRowLinks as { name, url, link }}
							<a href={link} target="_blank" class="w-8 h-8 md:w-7 md:h-7">
								<img class="w-8 h-8 md:w-7 md:h-7" src={url} alt={name} />
							</a>
						{/each}
					</div>
					<!-- Second row of icons -->
					<div class="flex justify-end md:gap-4 gap-8">
						{#each secondRowLinks as { name, url, link }}
							<a href={link} target="_blank" class="w-8 h-8 md:w-7 md:h-7">
								<img class="w-8 h-8 md:w-7 md:h-7" src={url} alt={name} />
							</a>
						{/each}
					</div>
				</div>
			</div>
		</div>

		<div class="mt-4 flex justify-between items-center border-t pt-4 border-gray-700 text-xs md:text-base">
			<p class="md:w-auto w-2/4 text-left">&copy; 2024 JovannMC. All rights reserved. All wrongs not reserved.</p>
			<p class="md:w-auto w-3/4 text-right">
				This site is under <br class="md:hidden" />the
				<a href="https://opensource.org/license/MIT" class="text-blue-400">MIT License</a>.
			</p>
		</div>
	</div>
</footer>

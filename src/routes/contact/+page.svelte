<script lang="ts">
	import Container from '../../components/Container.svelte';
	import HorizontalCard from '../../components/HorizontalCard.svelte';
	let socialLinks = [
		{ name: 'Discord', description: "Join my Discord server!", thumbnail: '/images/socials/discord.svg', link: 'https://discord.com/invite/fPrjXeN9fe' },
		{ name: 'Matrix', description: "Add me on Matrix on your favourite homeserver and client!", thumbnail: '/images/socials/matrix.svg', link: 'https://matrix.to/#/@jovannmc:tchncs.de' },
		{ name: 'GitHub', description: "Find my open-sourced projects!", thumbnail: '/images/socials/github.svg', link: 'https://github.com/JovannMC' },
		{ name: 'Twitter', description: "Follow me on Twitter (no, it's not X)", thumbnail: '/images/socials/twitter.svg', link: 'https://twitter.com/JovannMC' },
		{ name: 'Mastodon', description: "Follow me on the fediverse (for micro-blogging)!", thumbnail: '/images/socials/mastodon.svg', link: 'https://mastodon.femboyfurry.net/@JovannMC' },
		{ name: 'YouTube', description: "Subscribe and watch my videos on *that* platform.", thumbnail: '/images/socials/youtube.svg', link: 'https://youtube.com/@JovannMC' },
		{ name: 'Vanillo', description: "Subscribe and watch my videos on the cool ice cream platform!", thumbnail: '/images/socials/vanillo.svg', link: 'https://vanillo.tv/u/JovannMC' },
		{ name: 'Twitch', description: "Follow me and maybe watch my live streams!", thumbnail: '/images/socials/twitch.svg', link: 'https://twitch.tv/JovannMC' },
		{ name: 'PeerTube', description: "Follow me on the fediverse (for video-sharing)!", thumbnail: '/images/socials/peertube.svg', link: 'https://vid.femboyfurry.net/c/jovannmc' },
		{ name: 'Odysee', description: "Subscribe and watch my videos on the.. crypto platform. oh.", thumbnail: '/images/socials/odysee.svg', link: 'https://odysee.com/@JovannMC:7' }
	];
</script>

<Container title="Contact me!">
	<p class="text-xl text-center justify-center">
		Here is a list of ways you can contact me. Lorem ipsum dolor sit amet consectetur adipisicing elit.
	</p>
	<div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
		{#each socialLinks as link}
			<HorizontalCard
				title={link.name}
				description={link.description}
				footer="Click to visit"
				thumbnail={link.thumbnail}
				on:click={() => window.open(link.link, '_blank')}
			></HorizontalCard>
		{/each}
	</div>
</Container>

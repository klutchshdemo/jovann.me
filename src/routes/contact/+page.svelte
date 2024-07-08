<script lang="ts">
	import Container from '../../components/Container.svelte';
	import HorizontalCard from '../../components/HorizontalCard.svelte';

	let socialCategories = [
		{
			category: 'Communication',
			links: [
				{
					name: 'Email',
					description: "Send me an email, if that's more your thing!",
					thumbnail: '/images/socials/email.svg',
					url: 'mailto:jovannmc@femboyfurry.net'
				},
				{
					name: 'Discord',
					description: 'Join my Discord server and find me there!',
					thumbnail: '/images/socials/discord.svg',
					url: 'https://discord.com/invite/fPrjXeN9fe'
				},
				{
					name: 'Matrix',
					description: 'Add me on Matrix on your favourite homeserver and client!',
					thumbnail: '/images/socials/matrix.svg',
					url: 'https://matrix.to/#/@jovannmc:tchncs.de'
				}
			]
		},
		{
			category: 'Social Media',
			links: [
				{
					name: 'Twitter',
					description: "Follow me on Twitter (no it's not X, and never will be)",
					thumbnail: '/images/socials/twitter.svg',
					url: 'https://twitter.com/JovannMC'
				},
				{
					name: 'Mastodon',
					description: 'Follow me on the fediverse (for micro-blogging)!',
					thumbnail: '/images/socials/mastodon.svg',
					url: 'https://mastodon.femboyfurry.net/@JovannMC'
				},
				{
					name: 'Bluesky',
					description: 'Follow me on the "Twitter replacement" people moved to!',
					thumbnail: '/images/socials/bluesky.svg',
					url: 'https://bsky.app/profile/femboyfurry.net'
				}
			]
		},
		{
			category: 'Content Creation',
			links: [
				{
					name: 'GitHub',
					description: 'Find my open-sourced projects and my contributions!',
					thumbnail: '/images/socials/github.svg',
					url: 'https://github.com/JovannMC'
				},
				{
					name: 'YouTube',
					description: 'Subscribe and watch my videos on the platform we are all stuck with.',
					thumbnail: '/images/socials/youtube.svg',
					url: 'https://youtube.com/@JovannMC'
				},
				{
					name: 'Vanillo',
					description: 'Subscribe and watch my videos on the cool ice cream platform!',
					thumbnail: '/images/socials/vanillo.svg',
					url: 'https://vanillo.tv/u/JovannMC'
				},
				{
					name: 'Twitch',
					description: 'Follow me and maybe watch my live streams (if I start again)!',
					thumbnail: '/images/socials/twitch.svg',
					url: 'https://twitch.tv/JovannMC'
				},
				{
					name: 'PeerTube',
					description: 'Follow me on the fediverse (for video-sharing)!',
					thumbnail: '/images/socials/peertube.svg',
					url: 'https://vid.femboyfurry.net/c/jovannmc'
				},
				{
					name: 'Odysee',
					description: 'Follow me and watch my videos on the.. crypto platform. oh.',
					thumbnail: '/images/socials/odysee.svg',
					url: 'https://odysee.com/@JovannMC:7'
				}
			]
		}
	];
</script>

<Container title="Contact me!">
	<p class="text-xl text-center justify-center">
		Here are all the ways you can contact me! Bug me about issues, ask me questions, or just say hi!<br /><br />
		You can also find all the other platforms I am active on - watching, creating, or just existing.
	</p>
	{#each socialCategories as category}
		<h2 class="text-2xl text-center font-bold my-4">{category.category}</h2>
		<div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
			{#each category.links as link}
				<HorizontalCard
					title={link.name}
					description={link.description}
					footer="Click to visit"
					thumbnail={link.thumbnail}
					url={link.url}
				></HorizontalCard>
			{/each}
		</div>
	{/each}
</Container>

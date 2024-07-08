<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import { slide } from 'svelte/transition';

	import Footer from '../components/Footer.svelte';

	// TODO: remove this probably, unused
	// Highlight JS
	import hljs from 'highlight.js/lib/core';
	import 'highlight.js/styles/github-dark.css';
	import { storeHighlightJs } from '@skeletonlabs/skeleton';
	import xml from 'highlight.js/lib/languages/xml'; // for HTML
	import css from 'highlight.js/lib/languages/css';
	import javascript from 'highlight.js/lib/languages/javascript';
	import typescript from 'highlight.js/lib/languages/typescript';

	hljs.registerLanguage('xml', xml); // for HTML
	hljs.registerLanguage('css', css);
	hljs.registerLanguage('javascript', javascript);
	hljs.registerLanguage('typescript', typescript);
	storeHighlightJs.set(hljs);

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	let menuOpen = false;

	function toggleMenu() {
		menuOpen = !menuOpen;
	}
</script>

<svelte:head>
	<!-- Favicons -->
	<link rel="manifest" href="/site.webmanifest" />
	<link rel="icon" type="image/png" sizes="192x192" href="/images/favicons/android-chrome-192x192.png" />
	<link rel="icon" type="image/png" sizes="512x512" href="/images/favicons/android-chrome-512x512.png" />
	<link rel="apple-touch-icon" sizes="180x180" href="/images/favicons/apple-touch-icon.png" />
	<link rel="icon" type="image/png" sizes="16x16" href="/images/favicons/favicon-16x16.png" />
	<link rel="icon" type="image/png" sizes="32x32" href="/images/favicons/favicon-32x32.png" />
	<link rel="icon" type="image/x-icon" href="/images/favicons/favicon.ico" />

	<!-- SEO -->
	<meta name="description" content="Personal website/portfolio of JovannMC" />
	<meta name="keywords" content="JovannMC, portfolio, website" />
	<meta name="author" content="JovannMC" />

	<!-- Open Graph Tags -->
	<meta content="jovann.me" property="og:title" />
	<meta content="Personal website/portfolio of JovannMC" property="og:description" />
	<meta content="https://jovann.me" property="og:url" />
	<meta content="https://jovann.me/images/jovannmc_white.png" property="og:image" />
	<meta content="#222222" data-react-helmet="true" name="theme-color" />
</svelte:head>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<!-- Hamburger menu -->
				<button class="lg:hidden mr-4 cursor-pointer h-8 w-8" on:click={toggleMenu}>
					<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
					</svg>
				</button>
				<img class="h-9" src="/images/jovannmc_white_wordmark.png" alt="JovannMC wordmark logo" />
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<div class="hidden lg:flex gap-8 items-center">
					<a href="/"> Home </a>
					<a href="/videos"> Videos </a>
					<a href="/contact"> Contact </a>
					<a class="btn btn-sm variant-ghost-surface" href="/projects"> Projects </a>
				</div>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>

	<!-- Hamburger menu contents -->
	<div class="lg:hidden" class:open={menuOpen}>
		{#if menuOpen}
			<div transition:slide={{ duration: 300 }} class="absolute top-16 left-0 w-full">
				<div class="flex flex-col gap-1 justify-center items-center bg-surface-900 shadow-lg px-4 py-2 z-10">
					<a href="/" class="w-full text-center block py-2"> Home </a>
					<a href="/videos" class="w-full text-center block py-2"> Videos </a>
					<a href="/contact" class="w-full text-center block py-2"> Contact </a>
					<a href="/projects" class="btn w-full text-center block py-2 mb-2"> Projects </a>
				</div>
			</div>
		{/if}
	</div>

	<!-- Main content -->
	<slot />

	<!-- Footer -->
	<Footer />
</AppShell>

<style>
	:root {
		--navbar-height: 68px;
	}
</style>

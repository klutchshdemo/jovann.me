<script lang="ts">
	import { onMount } from 'svelte';
	import Swiper from 'swiper';
	import { Navigation, Autoplay } from 'swiper/modules';
	import 'swiper/css';
	import 'swiper/css/navigation';

	let container: HTMLElement;

	onMount(() => {
		const swiper = new Swiper(container, {
			modules: [Navigation, Autoplay],
			slidesPerView: 1,
			spaceBetween: 10,
			breakpoints: {
				768: {
					slidesPerView: 2,
					spaceBetween: 20
				},
				1024: {
					slidesPerView: 3,
					spaceBetween: 30
				}
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			loop: true,
			autoplay: {
				delay: 3000,
				disableOnInteraction: true
			}
		});
	});
</script>

<div class="swiper" bind:this={container}>
	<div class="swiper-wrapper">
		<slot></slot>
	</div>

	<div class="swiper-button-prev"></div>
	<div class="swiper-button-next"></div>
</div>

<style>
	/* 
        THANK YOU TO THIS SNIPPET FOR FIXING THE INFINITELY EXTENDING WIDTH ISSUE, I WAS PULLING MY HAIR OUT.
        //https://github.com/nolimits4web/swiper/issues/3599
    */

	.swiper {
		width: 100%;
		max-width: 100%;
		max-height: 100vh;
		min-height: 0;
		min-width: 0;
	}

	:global(.swiper) {
		--swiper-theme-color: #dcdcdcdc; /* Your desired color */
	}
</style>

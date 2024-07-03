<script>
	import { onMount } from 'svelte';

	export let src = '';

	// Width and height take rem units
	export let width = '';
	export let height = '';
	export let aspectRatio = '';

	export let transparent = false;
	export let loading = false;

	let defaultAspectRatioValue = 0;

	// If aspect ratio is not provided, load image and calculate aspect ratio
	onMount(() => {
		const img = new Image();
		img.onload = () => {
			defaultAspectRatioValue = img.naturalWidth / img.naturalHeight;
			if (aspectRatio === '') aspectRatio = `${img.naturalWidth}:${img.naturalHeight}`;
		};
		img.src = src;
	});

	$: numeratorDenominator = aspectRatio.split(':').map(Number);
	$: aspectRatioValue =
		numeratorDenominator.length === 2 ? numeratorDenominator[0] / numeratorDenominator[1] : defaultAspectRatioValue;

	// Calculate padding top for aspect ratio box
	$: paddingTop = 100 / aspectRatioValue;

	// Calculate dimensions based on aspect ratio if one is provided without the other
	$: {
		if (width !== '' && height === '') {
			const widthValue = parseFloat(width);
			height = `${widthValue / aspectRatioValue}rem`;
		} else if (height !== '' && width === '') {
			const heightValue = parseFloat(height);
			width = `${heightValue * aspectRatioValue}rem`;
		}
	}

	// Compute final width and height
	$: defaultSize = 10;
	$: computedWidth = width.trim() !== '' ? width : `${defaultSize}rem`;
	$: computedHeight = height.trim() !== '' ? height : `${defaultSize / aspectRatioValue}rem`;
</script>

<div
	class={`image-container relative overflow-hidden rounded-lg ${!transparent ? 'bg-surface-400' : ''} ${loading ? 'animate-pulse' : ''}`}
	style={`width: ${computedWidth}; height: ${computedHeight};`}
	tabindex="-1"
>
	<div
		class="image-content"
		style={`background-image: ${loading ? 'none' : `url(${src})`}; width: 100%; height: 100%;`}
	></div>
	<div class="aspect-ratio-box" style="width: 100%; padding-top: ${paddingTop}%;"></div>
</div>

<style>
	.image-container,
	.image-content {
		background-size: cover;
		background-position: center;
		transition:
			transform 0.3s ease,
			box-shadow 0.3s ease;
		transform: scale(1);
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	}
	.aspect-ratio-box:empty {
		display: block;
	}

	.image-container:hover,
	.image-container:active,
	.image-container:focus {
		/* Added for touch devices, ensure your elements are focusable */
		transform: scale(1.05);
		box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
	}
</style>

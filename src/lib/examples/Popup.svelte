<script>
	import { spring } from 'svelte/motion';

	let active = true;

	const smooth = { stiffness: 0.03, damping: 0.45 };
	const scale = spring(1, smooth);
	const rotateDelta = spring(0, smooth);

	function popup() {
		scale.set(1.45);
		rotateDelta.set(360);
	}

	function retreat() {
		scale.set(1);
		rotateDelta.set(0);
	}

	$: if (active) {
		popup();
	} else {
		retreat();
	}

	$: style = [`--scale: ${$scale}`, `--rotateDelta: ${$rotateDelta}deg`].join(';');
</script>

<div class="card" {style}>
	<button class="card-inner" on:click={() => (active = !active)}>
		<div class="card-back">
			<img
				src="https://cloud.appwrite.io/v1/cards/cloud-back?mock=normal"
				alt="The back of the Card"
				loading="lazy"
				width="450"
				height="274"
			/>
		</div>
		<div class="card-front">
			<img
				src="https://cloud.appwrite.io/v1/cards/cloud?mock=normal"
				alt="The front of the card"
				width="450"
				height="274"
			/>
		</div>
	</button>
</div>

<style>
	/* Button reset */
	button {
		background: none;
		border: none;
		padding: 0;
		cursor: pointer;
		outline: inherit;
	}

	.card {
		perspective: 1000px;
	}

	.card-inner {
		display: grid;
		transform: scale(var(--scale)) rotateY(var(--rotateDelta));
		transform-style: preserve-3d;
	}

	/* Position the front and back side */
	.card-front,
	.card-back {
		grid-area: 1/1;
		backface-visibility: hidden;
	}

	/* Rotate the back side 180 degrees */
	.card-back {
		transform: rotateY(180deg);
	}
</style>

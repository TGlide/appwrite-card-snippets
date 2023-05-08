<script lang="ts">
	import { spring } from 'svelte/motion';

	const smooth = { stiffness: 0.066, damping: 0.25 };
	const rotate = spring({ x: 0, y: 0 }, smooth);

	const round = (num: number, fix = 3) => parseFloat(num.toFixed(fix));
	function getMousePosition(e: MouseEvent | TouchEvent) {
		if ('touches' in e) {
			return {
				x: e?.touches?.[0]?.clientX,
				y: e?.touches?.[0]?.clientY,
			};
		} else {
			return {
				x: e.clientX,
				y: e.clientY,
			};
		}
	}

	const interact = (e: MouseEvent | TouchEvent) => {
		const { x: clientX, y: clientY } = getMousePosition(e);

		const el = e.target as HTMLElement;
		const rect = el.getBoundingClientRect(); // get element's current size/position
		const absolute = {
			x: clientX - rect.left, // get mouse position from left
			y: clientY - rect.top, // get mouse position from right
		};

		const center = {
			x: round((100 / rect.width) * absolute.x) - 50,
			y: round((100 / rect.height) * absolute.y) - 50,
		};

		rotate.set({
			x: round(-(center.x / 3.5)),
			y: round(center.y / 2),
		});
	};

	const interactEnd = () => {
		setTimeout(() => {
			rotate.set({ x: 0, y: 0 });
		}, 500);
	};

	$: style = [`--rotateX: ${$rotate.x}deg`, `--rotateY: ${$rotate.y}deg`].join(';');
</script>

<div class="card" {style}>
	<div class="card-inner" on:pointermove={interact} on:mouseout={interactEnd} on:blur={interactEnd}>
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
	</div>
</div>

<style>
	.card {
		perspective: 1000px;
	}

	.card-inner {
		display: grid;
		transform-style: preserve-3d;
		transform: rotateY(var(--rotateX)) rotateX(var(--rotateY));
		transform-origin: center;
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

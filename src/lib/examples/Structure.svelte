<div class="card">
	<div class="card-inner">
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
		transition: transform 0.8s;
		transform-style: preserve-3d;
	}

	/* Do an horizontal flip when you move the mouse over the flip box container */
	.card:hover .card-inner {
		transform: rotateY(180deg);
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

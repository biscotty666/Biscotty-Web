<script>
	import Button from '$lib/Button.svelte';
	import Contact from '$lib/Contact.svelte';
</script>

<div class="container grid">
	<div class="what">
		<h3>What We Do?</h3>
		<p>
			Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque quod qui error, est vero
			voluptas laudantium asperiores aperiam corrupti placeat, in molestias tenetur beatae illo
			libero id ducimus repudiandae esse!
		</p>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum fugiat illo, impedit nemo
			adipisci fugit ea, labore natus ipsa, minus dolores fuga cumque perferendis odit. Aut eum sint
			illo doloribus.
		</p>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum fugiat illo, impedit nemo
			adipisci fugit ea, labore natus ipsa, minus dolores fuga cumque perferendis odit. Aut eum sint
			illo doloribus.
		</p>

		<Button class="secondary" id="a-button" size="medium">Call to Action >></Button>
	</div>
	<Contact />
</div>

<style>
	.grid {
		display: grid;
		grid-template-columns: repeat(12, 1fr);
		gap: 2em;
	}
	.what {
		grid-column: span 9;
	}
	.contact {
		grid-column: span 3;
	}
	h3 {
		padding-bottom: 0.5em;
		margin-bottom: 0.5em;
		font-size: 2em;
		font-weight: 500;
		border-bottom: 1px solid #ddd;
	}
</style>

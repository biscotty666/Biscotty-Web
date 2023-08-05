<script>
	import Contact from '$lib/Contact.svelte';
	import Seo from '$lib/Seo.svelte';
</script>

<div class="container grid">
	<div class="what">
		<h3>About Me</h3>

		<p>
			Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis accusamus quidem libero,
			exercitationem similique illo quis explicabo! Nisi obcaecati tempora iste nostrum nobis ipsa
			praesentium. Recusandae placeat amet nam voluptatibus.
		</p>

		<p>
			Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis accusamus quidem libero,
			exercitationem similique illo quis explicabo! Nisi obcaecati tempora iste nostrum nobis ipsa
			praesentium. Recusandae placeat amet nam voluptatibus.
		</p>
		<p>
			Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis accusamus quidem libero,
			exercitationem similique illo quis explicabo! Nisi obcaecati tempora iste nostrum nobis ipsa
			praesentium. Recusandae placeat amet nam voluptatibus.
		</p>
		<p>
			Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis accusamus quidem libero,
			exercitationem similique illo quis explicabo! Nisi obcaecati tempora iste nostrum nobis ipsa
			praesentium. Recusandae placeat amet nam voluptatibus.
		</p>
	</div>
	<Contact />
</div>
<Seo title="About biscotty's Workshop" description="All about it" type="Webpage" />

<style>
	.grid {
		display: grid;
		grid-template-columns: repeat(12, 1fr);
		gap: 2em;
	}
	.what {
		grid-column: span 10;
	}
	.contact {
		grid-column: span 2;
	}
	h3 {
		padding-bottom: 0.5em;
		margin-bottom: 0.5em;
		font-size: 2em;
		font-weight: 500;
		border-bottom: 1px solid #ddd;
	}
	p {
		padding-bottom: 1em;
	}
</style>

<script>
	import { page } from '$app/stores';

	const navs = [
		{
			title: 'Home',
			href: '/'
		},
		{
			title: 'About',
			href: '/about'
		},
		{
			title: 'Obsidian',
			href: '/obsidian'
		},
		{
			title: 'Contact',
			href: '/contact'
		}
	];

	$: routeId = $page.route.id;
</script>

<nav>
	<div class="container">
		<h1>biscotty</h1>
		<ul>
			{#each navs as { title, href }}
				<li>
					<a {href} class:active={routeId == href} {title}>{title}</a>
				</li>
			{/each}
		</ul>
	</div>
</nav>

<style>
	nav {
		background-color: #212529;
		color: white;
		padding: 0.5em;
	}
	.container {
		display: flex;
		align-items: center;
	}
	ul {
		display: flex;
		margin: 0;
		margin-left: auto;
		list-style: none;
		font-size: 1em;
	}
	li {
		margin-right: 20px;
	}
	h1 {
		margin: 0;
		font-size: 1.3em;
		font-weight: normal;
		color: white;
	}
	a {
		text-decoration: none;
		color: #999;
	}
	.active {
		color: white;
	}
</style>

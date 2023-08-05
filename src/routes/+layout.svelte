<script>
	import { onMount } from 'svelte';
	import '../app.css';
	import Footer from './Footer.svelte';
	import Hero from './Hero.svelte';
	import Navbar from './Navbar.svelte';
	import { invalidateAll } from '$app/navigation';

	/* 	onMount(() => {
		const { data: { subscription }} => SupabaseAuthClient.auth.onAuthStateChange(() => {
			invalidateAll()
		})
	}) */
</script>

<Navbar />
<Hero />
<slot />

<Footer />

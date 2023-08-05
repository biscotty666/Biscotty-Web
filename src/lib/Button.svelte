<script>
	export let size = 'medium';
</script>

<button class:small={size === 'small'} class:medium={size === 'medium'} {...$$restProps}>
	<slot />
</button>

<style>
	button {
		border: none;
		background-color: var(--primary-color);
		border-radius: 0.25em;
		color: white;
		font-size: 1em;
	}
	.medium {
		padding: 1em 1.5em;
	}

	.small {
		padding: 0.25em 0.5em;
	}
</style>

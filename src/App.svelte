<script>
	let firstName = 'Peter';
	let lastName = 'Rodjinski'
	let city = 'Orlando';

	$: fullName = `${firstName} ${lastName}`
	$: {
		console.log(city);
		console.log(fullName);
	}
</script>

<main>
	<p>{fullName} from {city}!</p>
	<input type="text" bind:value={firstName}>
	<input type="text" bind:value={lastName}>
	<input type="text" bind:value={city}>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
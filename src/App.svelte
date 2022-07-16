<script>
	import { get_all_dirty_from_scope } from "svelte/internal";
	import Modal from "./Modal.svelte";

	let showModal = false;

	let people = [
		{ name: "yoshi", beltColour: "black", age: 25, id: 1 },
		{ name: "mario", beltColour: "orange", age: 45, id: 2 },
		{ name: "luigi", beltColour: "brown", age: 35, id: 3 },
	];

	const removePerson = (id) => {
		// Remove person from array
		people = people.filter((person) => person.id != id);
	};

	const toggleModal = () => {
		showModal = !showModal;
	};
</script>

<Modal isPromo={false} {showModal} on:click={toggleModal}>
	<div slot="title">
		<h3>Add a new person</h3>
	</div>
	<form>
		<input type="text" placeholder="name" />
		<input type="text" placeholder="belt color" />
		<button>Add person</button>
	</form>
</Modal>
<main>
	<button on:click|once={toggleModal}>Toggle Modal</button>
	{#each people as person (person.id)}
		<div>
			<h4>{person.name}</h4>
			{#if person.beltColour === "black"}
				<p><strong>NINJAA</strong></p>
			{/if}
			<p>{person.age} {person.beltColour}</p>
			<button on:click={() => removePerson(person.id)}>Delete</button>
		</div>
	{:else}
		<p>There are no people to show</p>
	{/each}
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>

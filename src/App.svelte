<script>
	import Modal from "./Modal.svelte";
	import AddPersonForm from "./AddPersonForm.svelte";

	let showModal = false;

	let people = [
		{ name: "yoshi", beltColour: "black", age: 25, id: 1 },
		{ name: "mario", beltColour: "orange", age: 45, id: 2 },
		{ name: "luigi", beltColour: "brown", age: 35, id: 3 },
	];

	const removePerson = (id) => {
		people = people.filter((person) => person.id != id);
	};

	const addPerson = (e) => {
		const person = e.detail;
		people = [person, ...people];
		showModal = false;
	};
	const toggleModal = () => {
		showModal = !showModal;
	};
</script>

<Modal isPromo={false} {showModal} on:click={toggleModal}>
	<AddPersonForm on:addPerson={addPerson} />
</Modal>
<main>
	<button on:click={toggleModal}>Toggle Modal</button>
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

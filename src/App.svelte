<script>
	import Header from "./components/Header.svelte";
	import Footer from "./components/Footer.svelte";
	import CreatePollForm from "./components/CreatePollForm.svelte";
	import PollList from "./components/PollList.svelte";
	import Tabs from "./shared/Tabs.svelte";

	// tabs
	let items = ["Current Polls", "Add New Poll"];
	let activeItem = "Current Polls";

	let polls = [
		{
			id: 1,
			question: "Python or JavaScript?",
			answerA: "Python",
			answerB: "JavaScript",
			votesA: 18,
			votesB: 15,
		},
		{
			id: 2,
			question: "MacOS or Windows",
			answerA: "MacOS",
			answerB: "Windows",
			votesA: 29,
			votesB: 3,
		},
	];

	const tabChange = (e) => {
		activeItem = e.detail;
	};

	const handleVote = (e) => {
		const { id, option } = e.detail;
		let copiedPolls = [...polls];
		let upvotedPoll = copiedPolls.find((poll) => poll.id === id);
		if (option === "a") {
			upvotedPoll.votesA++;
		} else if (option === "b") {
			upvotedPoll.votesB++;
		}

		polls = copiedPolls;
	};

	const handleAddPoll = (e) => {
		const poll = e.detail;
		polls = [poll, ...polls];
		activeItem = "Current Polls";
	};
</script>

<Header />
<main>
	<Tabs {activeItem} {items} on:tabChange={tabChange} />
	{#if activeItem === "Current Polls"}
		<PollList {polls} on:vote={handleVote} />
	{:else if activeItem === "Add New Poll"}
		<CreatePollForm on:addPoll={handleAddPoll} />
	{/if}
</main>
<Footer />

<style>
	main {
		max-width: 960px;
		margin: 40px auto;
	}
</style>

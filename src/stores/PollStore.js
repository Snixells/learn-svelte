import { writable } from "svelte/store"

const PollStore = writable(
    [
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
    ]
);

export default PollStore
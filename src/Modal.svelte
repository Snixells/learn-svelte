<script>
    let showModal = false;

    const toggleModal = () => {
        showModal = !showModal;
    };
</script>

<button on:click={toggleModal}>Toggle Modal</button>
{#if showModal === true}
    <div class="backdrop">
        <div class="modal">
            <p>Sign up for offers</p>
        </div>
    </div>
{/if}

<style>
</style>

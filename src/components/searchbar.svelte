<script>
    export let passSearchTermBack = () => {};
    let searchTerm;
</script>
<section>
    <input type="text" placeholder="Search..." bind:value={searchTerm}>
    <button class="button-small" on:click={() => passSearchTermBack(searchTerm)}>Search</button>
</section>
<style>
    section {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 0.5em;
        padding: 1em 0;
        position: relative;
        box-shadow: var(--box-shadow);
    }
    input {
        max-width: 12em;
        align-self: stretch;
        padding-left: 0.5em;
        border: 0.05em solid var(--black-translucent);
        border-radius: var(--radius-less);
        font-family: var(--accent-font);
        font-size: var(--font-small);
    }
    input:focus {
        outline-color: var(--blue);
        border-color: var(--blue);
    }
</style>
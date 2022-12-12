<script>
    let filter;
    export let passFilterBack = () => {}

    $: passFilterBack(filter);
</script>
<div class="wrapper">
    <p>Sort by:</p>
    <select bind:value={filter} >
        <option value="date-desc" selected>Date Desc</option>
        <option value="date-asc">Date Asc</option>
    </select>
</div>
<style>
    .wrapper {
        border: 0 solid var(--default-grey);
    }
    p {
        font-family: var(--accent-font);
        font-size: var(--font-x-small);
        display: inline-block;
    }
    select,
    option {
        font-family: var(--accent-font);
        font-size: var(--default-font-size);
    }
    select {
        background-color: var(--default-grey);
        border: 1px solid var(--default-grey);
        border-radius: var(--radius);
        padding: 0.3em 0.7em;
        margin-left: 0.3em;
    }
</style>
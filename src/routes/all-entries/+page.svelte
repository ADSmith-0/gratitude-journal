<script>
    import Searchbar from '$lib/components/searchbar.svelte';
    import SortEntries from '$lib/components/sortEntries.svelte';
    import Loading from '$lib/components/loading.svelte';
	import EntryList from '$lib/components/entryList.svelte';
	import { findEntries, getEntries } from '$lib/db/db-local';
    let searchTerm = "";
    let sort = "date-desc";
    let pEntries = getEntries();
    const setSearchTerm = newTerm => searchTerm = newTerm;
    const setSort = newSort => sort = newSort;

    $: pEntries = !!searchTerm ? findEntries(searchTerm) : getEntries();
</script>
<section class="searchbar-section">
    <section class="searchbar-wrapper">
        <Searchbar passSearchTermBack={setSearchTerm}/>
        <SortEntries passSortBack={setSort}/>
    </section>
</section>
<section class="entries hide-scrollbar">
    {#await pEntries}
        <Loading />
    {:then entries}
        <EntryList entries={entries} searchTerm={searchTerm} sort={sort}/>
    {:catch error}
        <p>Error: Please try again {error}</p>
    {/await}
</section>
<style>
    :root {
        --searchbar-height: 7em;
    }
    .searchbar-section {
        background-color: var(--background-color);
        position: fixed;
        top: var(--top-bar-height);
        width: 100%;
    }
    .searchbar-wrapper {
        position: relative;
        box-shadow: var(--box-shadow);
        padding: 1em 1em 0.5em 1em;
    }
    .entries {
        background-color: var(--grey);
        padding: 1em;
        padding-top: calc(1em + var(--searchbar-height));
        box-sizing: border-box;
    }
</style>
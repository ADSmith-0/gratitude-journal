<script>
    import Searchbar from '../../components/searchbar.svelte';
    import FilterEntries from '../../components/filterEntries.svelte';
    import Loading from '../../components/loading.svelte';
	import EntryCard from '../../components/entryCard.svelte';
	import { db } from '../../db-local';
    import { browser } from '$app/environment';
	import { sortDateAsc, sortDateDesc } from '../../util';
    let searchTerm = "";
    let filter = "date-desc";
    const errorVal = [{ date:"01/01/1970", content: " " }];
    const setSearchTerm = newTerm => searchTerm = newTerm;
    const setFilter = newFilter => filter = newFilter;
    
    const getEntriesFromSearchTerm = searchTerm => {
        return new Promise(async (resolve, reject) => {
            try {
                if(!browser) resolve(errorVal);
                const entries = await db.entries.toArray();
                resolve(
                    searchTerm ?
                    entries.filter(entry => entry.content.toLowerCase().includes(searchTerm.toLowerCase())) :
                    entries
                );
            }catch(error){
                console.error(error);
                reject(errorVal);
            }
        })
    }

    const filterEntries = async (pEntriesRaw, filter) => (
        new Promise(async (resolve, reject) => {
            const rEntriesRaw = await pEntriesRaw;
            if(filter == "date-desc"){
                resolve(rEntriesRaw.sort((a,b) => sortDateDesc(a, b)));
            }
            if(filter == "date-asc"){
                resolve(rEntriesRaw.sort((a,b) => sortDateAsc(a, b)));
            }
            resolve(rEntriesRaw);
        })
    )

    $: entriesRaw = getEntriesFromSearchTerm(searchTerm) || errorVal;
    $: entriesPromise = filterEntries(entriesRaw, filter) || entriesRaw;
</script>
<section class="searchbar-section">
    <section class="searchbar-wrapper">
        <Searchbar passSearchTermBack={setSearchTerm}/>
        <FilterEntries passFilterBack={setFilter}/>
    </section>
</section>
<section class="entries hide-scrollbar">
    {#await entriesPromise}
        <Loading />
    {:then entries}
        {#if entries.length !== 0}
            {#each entries as entry}
                <EntryCard entry={entry} searchTerm={searchTerm}/>
            {/each}
        {:else} 
            <p class="no-entries-msg">No Entries found</p>
        {/if}
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
    .no-entries-msg {
        text-align: center;
    }
</style>
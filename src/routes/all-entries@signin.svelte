<script>
    import Searchbar from '../components/searchbar.svelte';
    import Loading from '../components/loading.svelte';
	import EntryCard from '../components/entryCard.svelte';
	import { db } from '../db';
    import { browser } from '$app/env';
    let searchTerm = "";
    const errorVal = [{ date:"01/01/1970", content: " " }];
    const setSearchTerm = newTerm => searchTerm = newTerm;
    
    const getEntriesFromSearchTerm = searchTerm => {
        return new Promise(async (resolve, reject) => {
            try {

                if(!browser) resolve(errorVal);
                const entries = await db.entries.toArray();
                console.log(entries);
                resolve(
                    searchTerm ?
                    entries.filter(entry => entry.content.includes(searchTerm)) :
                    entries
                );
            }catch(error){
                console.error(error);
                reject(errorVal);
            }
        })
    };

    $: entriesPromise = getEntriesFromSearchTerm(searchTerm) || errorVal;
</script>
<section class="searchbar-wrapper">
    <Searchbar passSearchTermBack={setSearchTerm}/>
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
        --searchbar-height: 4.5em;
    }
    .searchbar-wrapper {
        background-color: #fff;
        position: fixed;
        top: var(--top-bar-height);
        height: var(--searchbar-height);
        width: 100%;
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
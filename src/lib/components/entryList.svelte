<script>
    import EntryCard from "./entryCard.svelte";
    import { sortDateAsc, sortDateDesc } from '$lib/util';

    export let entries = [];
    export let searchTerm = "";
    export let sort = "";

    const sortEntries = (entries, sort) => {
        if(entries.length > 0){
            if(sort == "date-desc"){
                return entries.sort((a,b) => sortDateDesc(a, b));
            }
            if(sort == "date-asc"){
                return entries.sort((a,b) => sortDateAsc(a, b));
            }
        }
    }

    $: sEntries = sortEntries(entries, sort);
</script>
{#if entries.length !== 0}
    {#each sEntries as entry (entry.date)}
        <EntryCard entry={entry} searchTerm={searchTerm}/>
    {/each}
{:else} 
    <p class="no-entries-msg">No Entries found</p>
{/if}
<style>
    .no-entries-msg {
        text-align: center;
    }
</style>
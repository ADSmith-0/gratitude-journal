<script>
	import { ISOFromDate } from "$lib/util";
	import { db } from "$lib/db/dexieInit";
    export let date;
    export let month;
    export let year;
    export let setSelected = () => {};
    export let isSelected = false;
    export let disabled = false;
    
    const entryExists = async (date, month, year) => {
        try {
            if(parseInt(date)){
                const thisDate = new Date(year, month, date);
                const exists = await db.entries.get(ISOFromDate(thisDate));
                return exists;
            }
        }catch(error){
            console.error(error);
        }
    }

    $: doesEntryExist = entryExists(date, month, year);
</script>
{#if parseInt(date)}
    {#if disabled}
        <button class="date-btn bg-grey" disabled=true>{date}</button>
    {:else}
        {#await doesEntryExist}
            <button class="date-btn bg-grey {isSelected ? 'selected' : ''}">{date}</button>
        {:then dateExists}
            <button class="date-btn {dateExists ? 'bg-pink': 'bg-grey'} {isSelected ? 'selected' : ''}" on:click={() => setSelected(date)}>{date}</button>
        {/await}
    {/if}
{:else}
    <p>{date}</p>
{/if}
<style>
    .date-btn {
        font-size: var(--font-x-small);
        font-family: var(--accent-font);
        height: 2em;
        width: 2em;
        border: none;
        border-radius: var(--radius);
        border: 0.05em solid var(--black-translucent);
    }
    .date-btn.selected {
        background-color: var(--green);
        
    }
    p {
        font-size: var(--font-x-small);
        font-family: var(--accent-font);
    }
</style>
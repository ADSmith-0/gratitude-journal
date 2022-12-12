<script>
    import { db } from '../db';
    import { browser } from '$app/env';
    import { ISOFromDate } from '../util';
    import DateInput from '../components/dateInput.svelte';
    import { getDayStrFromNum } from '../helpers/util.svelte';
    let date = new Date();
    let content = "";
    let entry = "";
    
    $: readableDate = date.toLocaleDateString();

    const setDate = newDate => date = newDate;

    const setEntry = newEntry => entry = newEntry;

    const getEntry = async (date, callback) => {
        let entry = browser ? (await db.entries.get(ISOFromDate(date))) : { content: "" };
        entry = entry || { content: "" };
        callback(entry);
    }

    $: getEntry(date, setEntry);

    $: content = entry && entry.content;

    $: day = getDayStrFromNum(date.getDay());

    const addEntry = async () => {
        try {
            const dateId = ISOFromDate(date);
            const result = await db.entries.add({
                date: dateId,
                content: content
            });
            // console.log(result);
        }catch(error){
            console.error(error);
        }
        
        getEntry(date, setEntry);
    }

    const editEntry = async () => {
        try {
            const dateId = ISOFromDate(date);
            await db.entries.update(dateId, {
                content: content
            });
        }catch(error){
            console.error(error);
        }

        getEntry(date, setEntry);
    }

    const deleteEntry = async () => {
        try {
            const dateId = ISOFromDate(date);
            await db.entries.delete(dateId);
        }catch(error){
            console.error(error);
        }

        getEntry(date, setEntry);
    }
</script>
<div class="container">
    <DateInput passDateBack={setDate}/>
</div>
<div class="main-wrapper">
    <main>
        {#if readableDate === (new Date().toLocaleDateString())}
            <p class="entry-title">What are you grateful for today?</p>
        {:else}
            <p class="entry-title">What were you grateful for on {day}?</p>
        {/if}
        {#if entry.content}
            <textarea class="entry-text" value={content} on:input={e => content = e.target.value}></textarea>
            <div class="buttons">
                <button class="button bg-blue" on:click={editEntry}>Edit</button>
                <button class="button bg-light-red" on:click={deleteEntry}>Delete</button>
            </div>
        {:else}
            <textarea class="entry-text" value={content} on:input={e => content = e.target.value} placeholder={readableDate === (new Date().toLocaleDateString()) ? "I'm grateful for..." : "I was grateful for..."}></textarea>
            <button class="button bg-green" on:click={addEntry} disabled={content === ""}>Add</button>
        {/if}
    </main>
</div>
<style>
    .container {
        border: 0.01em solid var(--grey);
        background-color: #fff;
    }
    .main-wrapper {
        background-color: var(--grey);
    }
    main {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 1em;
        gap: 1em;
        width: 80vw;
        margin: auto;
    }
    .entry-title {
        font-size: var(--font-small);
    }
    .entry-text {
        border-radius: var(--radius);
        border: 0.1em solid var(--black-translucent);
        height: 10em;
        align-self: stretch;
        padding: 1em;
        box-sizing: border-box;
        font-size: var(--font-x-small);
    }
    .buttons {
        display: flex;
        flex-direction: row;
        gap: 2em;
    }
    button:disabled {
        background-color: var(--grey);
    }
</style>
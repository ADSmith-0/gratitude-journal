<script>
    import { db } from '../../dexieInit';
    import { browser } from '$app/environment';
    import { addEntry, updateEntryContent, deleteEntry, getEntry } from '../../db-local';
    import { getTodaysDate, ISOFromDate } from '../../util';
    import DateInput from '../../components/dateInput.svelte';
    import { getDayStrFromNum } from '../../helpers/util.svelte';
	import { enhance } from '$app/forms';
    let date = new Date();
    let newContent = "";
    let content = "";
    
    $: readableDate = date.toLocaleDateString();

    const setDate = newDate => date = newDate;

    // const setEntry = newEntry => entry = newEntry;

    // const getEntry = async (date, callback) => {
    //     let entry = browser ? (await db.entries.get(ISOFromDate(date))) : { content: "" };
    //     entry = entry || { content: "" };
    //     callback(entry);
    // }

    // $: getEntry(date, setEntry);

    $: newContent == content;

    $: day = getDayStrFromNum(date.getDay());

    // const addEntry = async () => {
    //     try {
    //         const dateId = ISOFromDate(date);
    //         const result = await db.entries.add({
    //             date: dateId,
    //             content: content
    //         });
    //         // console.log(result);
    //     }catch(error){
    //         console.error(error);
    //     }
        
    //     getEntry(date, setEntry);
    // }

    // const editEntry = async () => {
    //     try {
    //         const dateId = ISOFromDate(date);
    //         await db.entries.update(dateId, {
    //             content: content
    //         });
    //     }catch(error){
    //         console.error(error);
    //     }

    //     getEntry(date, setEntry);
    // }

    // const deleteEntry = async () => {
    //     try {
    //         const dateId = ISOFromDate(date);
    //         await db.entries.delete(dateId);
    //     }catch(error){
    //         console.error(error);
    //     }

    //     getEntry(date, setEntry);
    // }

    const functionFromAction = action => {
        const functionsMap = {
            "addEntry": addEntry,
            "updateEntryContent": updateEntryContent,
            "deleteEntry": deleteEntry
        }
        return functionsMap[action];
    }

    const handleEnhance = async ({ data, action, cancel }) => {
        // get action name to perform
        const fn = functionFromAction(action.search.split("/")[1]);
        const date = data.get("date");
        const newContent = data.get("content");
        const lastModified = (new Date).toString();

        try {
            await fn(date, newContent, lastModified);
            content = newContent;
        }catch(error){
            console.error(error);
            // throw error;
        }
        
        // If the app is offline cancel the server call as it will error out
        if(!navigator.onLine){
            cancel();
        }
    }
</script>
<div class="container">
    <DateInput passDateBack={setDate}/>
</div>
<div class="main-wrapper">
    <form method="POST" use:enhance={handleEnhance}>
        <p class="entry-title">
            {readableDate === getTodaysDate() ?
            "What are you grateful for today?" : 
            `What were you grateful for on ${day}?`}
        </p>
        <input type="hidden" name="date" value={ISOFromDate(date)}>
        <textarea 
            name="content"
            class="entry-text"
            value={newContent}
            on:input={e => newContent = e.target.value}
            placeholder={readableDate === (new Date().toLocaleDateString()) ? "I'm grateful for..." : "I was grateful for..."}
        />
        {#if content}
            <div class="buttons">
                <button class="button bg-blue" formaction="?/updateEntryContent">Update</button>
                <button class="button bg-light-red" formaction="?/deleteEntry">Delete</button>
            </div>
        {:else}
            <button class="button bg-green" formaction="?/addEntry" disabled={newContent === ""}>Add</button>
        {/if}
    </form>
</div>
<style>
    .container {
        border: 0.01em solid var(--grey);
        background-color: var(--background-color);
    }
    .main-wrapper {
        background-color: var(--grey);
    }
    form {
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
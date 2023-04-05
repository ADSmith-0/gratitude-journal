<script>
    import { addEntry, updateEntryContent, deleteEntry, getEntry } from '../../db-local';
    import { getTodaysDate, ISOFromDate } from '../../util';
    import DateInput from '../../components/dateInput.svelte';
    import { getDayStrFromNum } from '../../helpers/util.svelte';
	import { enhance } from '$app/forms';
    let content = "";
    let entryContent = ""; // content pulled from the entry to check if it's been updated
    let date = new Date();
    $: readableDate = date.toLocaleDateString();
    $: ISODate = ISOFromDate(date);
    
    const setDate = newDate => date = newDate;

    $: entry = getEntry(ISODate, setContent);
    
    const setContent = async () => {
        content = (await entry)?.content || "";
        entryContent = content;
    }

    $: setContent(date);

    $: day = getDayStrFromNum(date.getDay());

    const functionFromAction = action => {
        const functionsMap = {
            "addEntry": addEntry,
            "updateEntryContent": updateEntryContent,
            "deleteEntry": deleteEntry
        }
        return functionsMap[action];
    }

    const handleEnhance = async ({ data, action, cancel }) => {
        const actionName = action.search.split("/")[1];
        const fn = functionFromAction(actionName);
        const date = data.get("date");
        const content = data.get("content");
        const lastModified = (new Date).toString();

        try {
            await fn(date, content, lastModified);
            entry = getEntry(date);
        }catch(error){
            console.error(error);
        }
        
        // If the app is offline cancel the server call as it will error out
        // TODO: get better implementation
        // https://stackoverflow.com/questions/189430/detect-if-the-internet-connection-is-offline
        if(!navigator.onLine){
            cancel();
        }
    }
</script>
<div class="container">
    <DateInput passDateBack={setDate}/>
</div>
<div class="main-wrapper">
    {#await entry}
        <p>Loading...</p>
    {:then entryRes}
        <form method="POST" use:enhance={handleEnhance}>
            <p class="entry-title">
                {readableDate === getTodaysDate() ?
                "What are you grateful for today?" : 
                `What were you grateful for on ${day}?`}
            </p>
            <input type="hidden" name="date" value={ISODate}>
            <textarea 
                name="content"
                class="entry-text"
                value={content}
                on:input={e => content = e.target.value}
                placeholder={readableDate === (new Date().toLocaleDateString()) ? "I'm grateful for..." : "I was grateful for..."}
            />
            {#if entryRes && entryRes.content !== ""}
                <div class="buttons">
                    <button class="button bg-blue" formaction="?/updateEntryContent" disabled={entryContent === content}>Update</button>
                    <button class="button bg-light-red" formaction="?/deleteEntry">Delete</button>
                </div>
            {:else}
                <button class="button bg-green" formaction="?/addEntry" disabled={content === ""}>Add</button>
            {/if}
        </form>
    {/await}
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
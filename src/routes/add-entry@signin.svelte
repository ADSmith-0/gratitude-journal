<script>
    import DatePicker from '../components/datePicker.svelte';
    let date = "";
    const setDate = newDate => date = newDate;
    const getEntryFromDate = date => {
        // TODO: query backend for data
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const val = Math.floor(Math.random() * 2);
                resolve(val ? true : false);
            }, 500);
        })
    }
    $: entry = date && getEntryFromDate(date);

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    $: day = days[new Date(date).getUTCDay()];
</script>
<div class="container">
    <DatePicker passDateBack={setDate}/>
</div>
<div class="main-wrapper">
    <main>
        {#if date === (new Date().toISOString().split("T")[0])}
            <p class="entry-title">What are you grateful for today?</p>
        {:else}
            <p class="entry-title">What were you grateful for on {day}?</p>
        {/if}
        {#await entry}
            <!-- TODO: replace with skeleton/spinner -->
            <p>Loading...</p>
        {:then entry} 
            {#if entry}
                <textarea class="entry-text" disabled>Hello there</textarea>
                <button class="button blue">Edit</button>
            {:else}
                <textarea class="entry-text" placeholder="Today I'm grateful for..."></textarea>
                <button class="button blue">Add</button>
            {/if}        
        {/await}
    </main>
</div>
<style>
    .container {
        border: 0.01em solid var(--grey);
    }
    .main-wrapper {
        background-color: var(--grey);
        height: 60vh;
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
</style>
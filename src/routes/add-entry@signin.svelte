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


</script>
<div class="container">
    <DatePicker passDateBack={setDate}/>
</div>
<div class="main-wrapper">
    <main>
        {#await entry}
            <!-- TODO: replace with skeleton/spinner -->
            <p>Loading...</p>
        {:then entry} 
            {#if entry}
                <textarea class="entry-text" disabled>Hello there</textarea>
                <button class="button blue">Edit</button>
            {:else}
                <textarea class="entry-text"></textarea>
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
        height: 78vh;
    }
    main {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-top: 2em;
        gap: 1em;
    }
    .entry-text {
        border-radius: var(--radius);
        border: 0.1em solid var(--black-translucent);
        height: 10em;
    }
</style>
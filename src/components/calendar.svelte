<script>
    import { getDaysArray } from '../helpers/calendarHelper.svelte';
    let currentDate = new Date();
    export let month = currentDate.getMonth();
    export let year = currentDate.getFullYear();

    let days;
    $: days = getDaysArray(month, year);

    const dateExists = async () => (
        await new Promise((resolve, reject) => {
            setTimeout(() => {
                const coinFlip = Math.floor(Math.random()*2);
                resolve(coinFlip);
            }, 500);
        })
    )
    
    let selected = "";
    const setSelected = i => selected = i;
</script>
<section class="calendar">
    {#each days as day, i}
        {#if parseInt(day)}
            {#await dateExists()}
                <button class="date-btn grey" key={i}>{day}</button>
            {:then dateExists}
                <button class="date-btn {dateExists == 0 ? 'pink': 'grey'} {selected == i ? 'selected' : ''}" key={i} on:click={() => setSelected(i)}>{day}</button>
            {/await}
        {:else}
            <p>{day}</p>
        {/if}
    {/each}
</section>
<style>
    .calendar {
        display: grid;
        grid-template-columns: repeat(7, auto);
        grid-template-rows: repeat(7, 1fr);
        place-items: center;
        gap: 0.5em;
    }
    .calendar p {
        font-size: var(--font-x-small);
        font-family: var(--accent-font);
    }
    .date-btn {
        font-size: var(--font-x-small);
        font-family: var(--accent-font);
        height: 2em;
        width: 2em;
        border: none;
        border-radius: var(--radius);
        /* box-shadow: 0 0.1em 0.05em var(--black-translucent); */
        border: 0.05em solid var(--black-translucent);
    }
    .date-btn.selected {
        background-color: var(--blue);
    }
</style>
<script>
    export let date;
    export let setSelected = () => {};
    export let isSelected = false;
    const entryExists = async () => (
        await new Promise((resolve, reject) => {
            setTimeout(() => {
                const coinFlip = Math.floor(Math.random()*2);
                resolve(coinFlip);
            }, 500);
        })
    )
</script>
{#if parseInt(date)}
    {#await entryExists()}
        <button class="date-btn grey">{date}</button>
    {:then dateExists}
        <button class="date-btn {dateExists == 0 ? 'pink': 'grey'} {isSelected ? 'selected' : ''}" on:click={() => setSelected(date)}>{date}</button>
    {/await}
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
<script>
    import DateSelector from './calendarScreen.svelte';

    let currentDate = new Date().toLocaleDateString();
    export let passDateBack = () => {};

    $: passDateBack(currentDate);

    let dateSelectorOpen = false;
    const openDateSelector = () => dateSelectorOpen = true;
    const closeDateSelector = () => dateSelectorOpen = false;
</script>
{#if dateSelectorOpen}
    <DateSelector closeDateSelector={closeDateSelector}/>
{/if}
<div class="date-picker-wrapper">
    <div class="date-picker-component">
        <p>Date:</p>
        <section class="date-picker-container">
            <button class="date-picker" on:click={openDateSelector}>
                {currentDate}
                <img 
                    src="./img/calendar-icon-black-96x96.png" 
                    alt="calendar icon"
                    height="35"
                    width="35"
                >
            </button>
        </section>
    </div>
</div>
<style>
    .date-picker-wrapper {
        display: flex;
        justify-content: center;
        position: relative;
        box-shadow: 0 0.1em 0.4em var(--black-translucent);
    }
    .date-picker-component {
        margin-top: 1em;
        padding-bottom: 1.5em;
    }
    .date-picker-container {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        position: relative;
        width: 15em;
    }
    .date-picker {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        height: 2.7em;
        padding-left: 1em;
        padding-right: 0.5em;
        font-family: var(--accent-font);
        font-size: var(--font-size-normal);
        border: 0.15em solid var(--black-translucent);
        border-radius: var(--radius);
        width: 100%;
        background: #fff;
    }
    .date-picker img {
        height: 1.5em;
        width: 1.5em;
    }
    .date-picker:focus {
        outline: none;
        border-color: var(--blue);
    }
</style>

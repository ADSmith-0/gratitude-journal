<script>
    import CalendarScreen from './calendarScreen.svelte';
    import { browser } from "$app/env";

    const urlDate = browser ? new URLSearchParams(window.location.search).get("date") : "";
    let selectedFullDate = urlDate ? new Date(urlDate) : new Date();
    $: date = selectedFullDate.getDate();
    export let passDateBack = () => {};

    const setSelectedDate = date => selectedFullDate = date;

    $: passDateBack(selectedFullDate);
    $: selectedFullDateStr = selectedFullDate.toLocaleDateString();

    let dateSelectorOpen = false;
    const openDateSelector = () => dateSelectorOpen = true;
    const closeDateSelector = () => dateSelectorOpen = false;
</script>
{#if dateSelectorOpen}
    <CalendarScreen selectedDate={date} passDateBack={setSelectedDate} closeDateSelector={closeDateSelector}/>
{/if}
<div class="date-picker-wrapper">
    <div class="date-picker-component">
        <p>Date:</p>
        <section class="date-picker-container">
            <button class="date-picker" on:click={openDateSelector}>
                {selectedFullDateStr}
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
    .date-picker-component > p {
        font-size: var(--font-small);
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

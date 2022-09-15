<script>
    export let passDateBack = () => {};
    export let closeDateSelector = () => {};
    import Blocker from './blocker.svelte';
    import MonthPicker from './monthPicker.svelte';
    import Calendar from './calendar.svelte';
    
    let selectedDate, selectedMonth, selectedYear;
    const setMonth = month => selectedMonth = month;
    const setYear = year => selectedYear = year; 

    const setSelectedDate = date => selectedDate = date;
    $: selectedFullDate = selectedDate ? new Date(selectedYear, selectedMonth, selectedDate) : "";
    $: readableSelectedFullDate = selectedFullDate ? selectedFullDate.toLocaleDateString() : "";
    const saveDate = () => {
        passDateBack(selectedFullDate);
        closeDateSelector();
    }
</script>
<Blocker backgroundColor="#fff">
    <section class="container">
        <MonthPicker month={selectedMonth} year={selectedYear} passMonthBack={setMonth} passYearBack={setYear}/>
        <Calendar month={selectedMonth} year={selectedYear} passBackSelectedDate={setSelectedDate}/>
        <div class="selected-date-input-wrapper">
            <label for="selected-date">Selected Date:</label>
            <input id="selected-date" type="text" disabled value={readableSelectedFullDate}>
        </div>
        <section class="buttons">
            <button class="button {selectedDate ? 'green' : ''}" on:click={saveDate}>Select</button>
            <button class="button" on:click={closeDateSelector}>Cancel</button>
        </section>
    </section>
</Blocker>

<style>
    .container {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        gap: 1em;
        margin: 0 2em;
    }
    .selected-date-input-wrapper {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 1em;
    }
    .selected-date-input-wrapper * {
        font-size: var(--font-small);
        font-family: var(--accent-font);
    }
    .selected-date-input-wrapper input {
        width: 6em;
        border: 0 solid var(--black-translucent);
        border-bottom-width: 0.1em;
        background-color: var(--grey);
        padding: 0.1em 0.5em;
        text-align: center;
        color: #000;
    }
    .buttons {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
    }
</style>
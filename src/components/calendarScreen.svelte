<script>
    export let closeDateSelector = () => {};
    import Blocker from './blocker.svelte';
    import MonthPicker from './monthPicker.svelte';
    import Calendar from './calendar.svelte';
    
    let selectedMonth, selectedYear;
    const setMonth = month => selectedMonth = month;
    const setYear = year => selectedYear = year; 

    const saveDate = () => {
        // TODO: send date back
        closeDateSelector();
    }
</script>
<Blocker backgroundColor="#fff">
    <section class="container">
        <MonthPicker month={selectedMonth} year={selectedYear} passMonthBack={setMonth} passYearBack={setYear} />
        <Calendar month={selectedMonth} year={selectedYear} />
        <section class="buttons">
            <button class="button" on:click={saveDate}>Save</button>
            <button class="button" on:click={closeDateSelector}>Cancel</button>
        </section>
    </section>
</Blocker>

<style>
    .container {
        display: flex;
        flex-direction: column;
        gap: 2em;
    }
    .buttons {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
    }
</style>
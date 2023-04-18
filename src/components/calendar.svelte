<script>
    import { getDatesArray } from '../lib/calendar';
    import CalendarDate from './calendarDate.svelte';
    export let passBackSelectedDate = () => {};
    export let allowFuture = false;
    let currentFullDate = new Date();
    export let selectedDate = currentFullDate.getDate();
    export let month = currentFullDate.getMonth();
    export let year = currentFullDate.getFullYear();

    $: dates = getDatesArray(month, year);
    
    const resetSelectedDate = () => selectedDate = "";
    const setSelected = date => selectedDate = date;
    $: ((dates) && resetSelectedDate());
    $: passBackSelectedDate(selectedDate);
</script>
<section class="calendar">
    {#each dates as date}
        <CalendarDate 
            date={date}
            month={month}
            year={year}
            setSelected={setSelected}
            isSelected={selectedDate === date}
            disabled={!allowFuture && (new Date(year, month, date).valueOf()) > currentFullDate.valueOf()}
        />
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
</style>
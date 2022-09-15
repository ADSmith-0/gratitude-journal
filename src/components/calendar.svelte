<script>
    import { getDatesArray } from '../helpers/calendarHelper.svelte';
    import CalendarDate from './calendarDate.svelte';
    export let passBackSelectedDate = () => {};
    let currentDate = new Date();
    export let month = currentDate.getMonth();
    export let year = currentDate.getFullYear();

    let dates;
    $: dates = getDatesArray(month, year);
    
    let selectedDate = "";
    const resetSelectedDate = () => selectedDate = "";
    const setSelected = date => selectedDate = date;
    $: ((dates) && resetSelectedDate());
    $: passBackSelectedDate(selectedDate);
</script>
<section class="calendar">
    {#each dates as date}
        <CalendarDate 
            date={date}
            setSelected={setSelected}
            isSelected={selectedDate === date}
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
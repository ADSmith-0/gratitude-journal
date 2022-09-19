<script>
    import { modulo } from '../helpers/util.svelte';
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    export let passMonthBack = () => {};
    export let passYearBack = () => {};
    export let allowFuture = false;
    let currentDate = new Date();
    export let month = currentDate.getMonth();
    export let year = currentDate.getFullYear();
   
    $: monthName = months[month];

    const prevMonth = () => {
        month = modulo(--month, 12);
        if(month == 11){
            --year;
        }
    }
    const nextMonth = () => {
        month = modulo(++month, 12);
        if(month == 0){
            ++year;
        }
    }

    $: passMonthBack(month);
    $: passYearBack(year);
</script>
<section class="month-picker">
    <p class="year">{year}</p>
    <button on:click={prevMonth}>&lt;</button>
    <p class="month">{monthName}</p>
    <button on:click={nextMonth} disabled={!allowFuture && (new Date().getMonth() === month)}>&gt;</button>
</section>
<style>
    .year {
        grid-column: 1/4;
        font-size: var(--font-size-default);
        font-family: var(--accent-font);
        color: var(--dark-grey);
    }
    .month-picker {
        display: grid;
        grid-template-columns: 1fr 2fr 1fr;
        place-items: center;
    }
    .month {
        font-size: var(--font-small);
        font-family: var(--accent-font);
    }
    .month-picker button {
        font-family: var(--accent-font);
        font-size: var(--font-size-default);
        background: var(--grey);
        border: none;
        border-radius: 50%;
        height: 2em;
        width: 2em;
        cursor: pointer;
    }
    .month-picker button:disabled {
        opacity: 0;
    }
</style>
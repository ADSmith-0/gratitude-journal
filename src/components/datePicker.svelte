<script>
    export let passDateBack = undefined;
    let dateSelected = new Date().toISOString().split("T")[0];
    $: (passDateBack && passDateBack(dateSelected));
</script>
<div class="date-picker-wrapper">
    <div class="date-picker-component">
        <p>Select a date:</p>
        <section class="date-picker-container">
            <input class="date-picker" type="date" bind:value={dateSelected} aria-label="date picker" placeholder="dd/mm/yyyy">
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
    .date-picker-container:after {
        content: "";
        display: block;
        position: absolute;
        top: 25%;
        right: 0.25em;
        background-image: url("./img/calendar-icon-black-96x96.png");
        background-size: contain;
        background-color: white;
        background-repeat: no-repeat;
        height: 1.5em;
        width: 1.5em;
        padding-right: 0.5em;
    }
    .date-picker {
        height: 2.7em;
        padding-left: 1em;
        font-family: var(--accent-font);
        font-size: var(--font-size-normal);
        border: 0.15em solid var(--black-translucent);
        border-radius: var(--radius);
        width: 100%;
        background: #fff;
    }
    .date-picker:focus {
        outline: none;
        border-color: var(--blue);
    }
</style>

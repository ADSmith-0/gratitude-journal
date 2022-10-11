<script>
    import { getDayStrFromNum } from '../helpers/util.svelte';
    export let entry = {};
    export let searchTerm = "";
    const highlightSearchTerm = text => {
        let newText = text.replace(new RegExp('.(?='+searchTerm+')', 'ig'), ' <mark>');
        newText = newText.replace(new RegExp('(?<='+searchTerm+').', 'ig'), '</mark> ');
        return newText;
    }
    const { date: dateStr, text } = entry;
    $: highlightedText = searchTerm ? highlightSearchTerm(text) : text;
    const getDayFromDateStr = dateStr => {
        const [date, month, year] = dateStr.split("/");
        return (getDayStrFromNum(new Date(year, month-1, date).getDay()));
    }
    $: day = getDayFromDateStr(dateStr);
</script>
<section class="card">
    <div class="info">
        <p>{dateStr} - {day}</p>
        <button class="button-small">Edit</button>
    </div>
    <p>{@html highlightedText}</p>
</section>
<style>
    .card {
        margin-bottom: 1.5em;
    }
    .info {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        border: 0 solid var(--black-translucent);
        border-bottom-width: 0.05em;
        padding-bottom: 0.5em;
        margin-bottom: 0.5em;
    }
    .info button {
        padding: 0.2em 0.7em;
        font-size: 0.9em;
    }
    p {
        font-family: var(--accent-font);
        font-size: var(--font-small);
    }
    .info p {
        color: var(--darker-grey);
        font-size: var(--font-x-small);
    }
</style>

<script>
    import { getDayStrFromNum } from '../helpers/util.svelte';
    export let entry = {};
    export let searchTerm = "";

    const highlightSearchTerm = text => (
        text.replace(new RegExp(searchTerm, 'gi'), function(term){
            return `<mark>${term}</mark>`;
        })
    )
    const { date, content } = entry;

    $: highlightedContent = searchTerm ? highlightSearchTerm(content) : content;

    const getDayFromDateStr = dateStr => {
        const [year, month, date] = dateStr.split("-");
        return (getDayStrFromNum(new Date(year, month-1, date).getDay()));
    }

    $: dateStr = new Date(date).toLocaleDateString();

    $: day = getDayFromDateStr(date);
</script>
<section class="card">
    <div class="info">
        <p>{dateStr} - {day}</p>
        <a class="button-small bg-default-grey" href="/add-entry?date={date}">Edit</a>
    </div>
    <p>{@html highlightedContent}</p>
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
    .info a {
        padding: 0.2em 0.7em;
        font-size: 0.9em;
        text-decoration: none;
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

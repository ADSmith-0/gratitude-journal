<script>
    import Searchbar from '../components/searchbar.svelte';
    import Loading from '../components/loading.svelte';
	import EntryCard from '../components/entryCard.svelte';
    let searchTerm = "";
    const setSearchTerm = newTerm => searchTerm = newTerm;
    const getEntriesFromSearchTerm = searchTerm => (
        new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve([
                    {date:"16/09/2022", text:"I got to have a good workout and chat to faez which was nice"},
                    {date:"17/09/2022", text:"Had a very chill day at work"},
                    {date:"18/09/2022", text:"Had a good workout at the gym and got to chat to Faez and Meri which was nice"},
                    {date:"19/09/2022", text:"Mum and Dad got a takeaway and got to read more of my book in the sun which was nice"},
                    {date:"20/09/2022", text:"Got to hang out with the group which was really nice, had a very chill day at work, got to hear from friends which was really nice as well, and this text just keeps on going and going and going and when is it going to stop, nobody knows!"}
                ]);
            }, 500);
        })
    );
    
    $: entriesPromise = getEntriesFromSearchTerm(searchTerm);
</script>
<section class="searchbar-wrapper">
    <Searchbar passSearchTermBack={setSearchTerm}/>
</section>
<section class="entries hide-scrollbar">
    {#await entriesPromise}
        <Loading />
    {:then entries}
        {#each entries as entry}
            <EntryCard entry={entry} searchTerm={searchTerm}/>
        {/each}
    {/await}
</section>
<style>
    :root {
        --searchbar-height: 4.5em;
    }
    .searchbar-wrapper {
        background-color: #fff;
        position: fixed;
        top: var(--top-bar-height);
        height: var(--searchbar-height);
        width: 100%;
    }
    .entries {
        background-color: var(--grey);
        padding: 1em;
        padding-top: calc(1em + var(--searchbar-height));
        box-sizing: border-box;
    }
</style>
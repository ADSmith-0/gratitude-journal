<script>
    import { page } from '$app/stores';

    $: selectedItem = $page.url.pathname;

    let items = [
        { name: "Add entry", link: "/add-entry", src: "plus-black-icon-35x35.png", alt: "add entry icon"},
        { name: "Edit entry", link: "/edit-entry", src: "pencil-black-icon-35x35.png", alt: "edit entry icon" },
        { name: "All entries", link: "/all-entries", src: "list-black-icon-35x35.png", alt: "all entries icon" },
        { name: "Account", link: "/account", src: "account-black-icon-35x35.png", alt: "account icon" }
    ];

    
    $: items = items.map(item => {
        if(selectedItem == item.link){
            item.src = item.src.replace('black', 'pink');
        }else{
            item.src = item.src.replace('pink', 'black');
        }
        return item;
    });
    
</script>
<section id="top">
    <a id="title" href="/">Gratitude.io</a>
    <a id="settings" href="/settings">
        <img src="/settings-icon-40x40.png" alt="settings">
    </a>
</section>
<section id="bottom">
    <nav>
        {#each items as {name, link, src, alt}}
            <a href={link} class="{selectedItem == link ? "selected": ""}">
                <img src={src} alt={alt}>
                {name}
            </a>
        {/each}
    </nav>
</section>
<style>
    #top {
        background-color: var(--pink);
        display: grid;
        grid-template-columns: 1fr 3fr 1fr;
        place-items: center;
        min-height: 65px;
    }
    #title {
        color: var(--title-color);
        font-size: var(--title-m-size);
        font-weight: 200;
        grid-column: 2/3;
    }
    #settings {
        display: flex;
    }
    a {
        text-decoration: none;
    }
    #bottom {
        position: absolute;
        bottom: 0;
        padding: 25px 0 15px 0;
        width: 100%;
        box-shadow: 0 -1px 2px #0004;
    }
    nav {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        place-items: center;
    }
    nav a {
        font-size: var(--font-x-small);
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        gap: 5px;
        align-items: center;
        font-weight: 400;
        color: var(--font-color);
    }
    .selected {
        color: var(--pink);
    }
</style>
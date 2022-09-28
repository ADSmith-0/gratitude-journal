<script>
    import { page } from '$app/stores';

    $: selectedItem = $page.url.pathname;

    let items = [
        { name: "Add entry", link: "/add-entry", src: "/img/plus-black-icon-100x100.png", alt: "add entry icon"},
        { name: "All entries", link: "/all-entries", src: "/img/list-black-icon-96x96.png", alt: "all entries icon" },
        { name: "Account", link: "/account", src: "/img/account-black-icon-96x96.png", alt: "account icon" }
    ];

    
    $: items = items.map(item => {
        if(selectedItem == item.link){
            item.src = item.src.replace('black', 'pink');
        }else{
            item.src = item.src.replace('pink', 'black');
        }
        return item;
    });

    let navbarVisible = true;

    const toggleNavbarVisible = (e) => {
        const height = e.target.innerHeight;
        navbarVisible = (height >= 600);
    }
    
</script>
<svelte:window on:resize={toggleNavbarVisible}></svelte:window>
<section id="top">
    <a id="title" href="/">Gratitude.io</a>
    <a id="settings" href="/settings">
        <img src="/img/settings-icon-40x40.png" alt="settings">
    </a>
</section>
<section id="bottom" class="{navbarVisible ? 'visible' : ''}">
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
        position: relative;
        top: 0;
        background-color: var(--pink);
        display: grid;
        grid-template-columns: 1fr 3fr 1fr;
        place-items: center;
        height: var(--top-bar-height);
        z-index: 99;
    }
    #title {
        color: var(--title-color);
        font-size: var(--title-m-size);
        font-weight: 200;
        grid-column: 2/3;
    }
    #settings {
        display: flex;
        font-size: var(--font-size-default);
    }
    a {
        text-decoration: none;
    }
    #bottom {
        display: none;
        position: absolute;
        bottom: 0;
        flex-direction: row;
        justify-content: stretch;
        align-items: center;
        padding: 0.5em 0;
        width: 100%;
        box-shadow: 0 -0.06em 0.125em #0004;
        background-color: #fff;
        z-index: 99;
        height: var(--bottom-bar-height);
        box-sizing: border-box;
    }
    nav {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        place-items: center;
        width: 100%;
    }
    nav a {
        font-size: var(--font-size-default);
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        gap: 0.31em;
        align-items: center;
        font-weight: 400;
        color: var(--font-color);
    }
    img {
        height: 2em;
        width: 2em;
    }
    .selected {
        color: var(--pink);
    }
    #bottom.visible {
        display: flex;
    }
</style>
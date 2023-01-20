<script>
    import { page } from '$app/stores';
    import { browser } from '$app/environment';

    $: if(browser) document.querySelector('html').classList.add('hide-scrollbar');

    $: selectedItem = $page.url.pathname;

    let items = [
        { 
            name: "Add entry",
            link: "/add-entry",
            imgs: {
                "black": { src: "/img/plus-black-icon-96x96.png", alt: "add entry black icon" },
                "selected": { src: "/img/plus-pink-icon-96x96.png", alt: "add entry selected icon" },
            }
        },
        { 
            name: "All entries",
            link: "/all-entries",
            imgs: {
                "black": { src: "/img/list-black-icon-96x96.png", alt: "all entries black icon" },
                "selected": { src: "/img/list-pink-icon-96x96.png", alt: "all entries selected icon" }
            }
        },
        { 
            name: "Account",
            link: "/account",
            imgs: {
                "black": {src: "/img/account-black-icon-96x96.png", alt: "account black icon" },
                "selected": {src: "/img/account-pink-icon-96x96.png", alt: "account selected icon" }
            }
        }
    ];

    let navbarVisible = true;

    const toggleNavbarVisible = (e) => {
        const height = e.target.innerHeight;
        navbarVisible = (height >= 600);
    }
    
</script>
<svelte:window on:resize={toggleNavbarVisible}></svelte:window>
<section id="top">
    <a id="title" href="/">Grately</a>
    <a id="settings" href="/settings">
        <img src="/img/settings-icon-40x40.png" alt="settings">
    </a>
</section>
<div class="content-wrapper hide-scrollbar">
    <slot></slot>
</div>
<section id="bottom" class="{navbarVisible ? 'visible' : ''}">
    <nav>
        {#each items as {name, link, imgs}}
            <a href={link} class="{selectedItem === link ? "selected": ""}">
                {#if selectedItem === link}
                    <img src={imgs.selected.src} alt={imgs.selected.alt}> 
                {:else}
                    <img src={imgs.black.src} alt={imgs.black.alt}>
                {/if}
                {name}
            </a>
        {/each}
    </nav>
</section>
<style>
    #top {
        position: sticky;
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
        font-weight: 400;
        grid-column: 2/3;
    }
    #settings {
        display: flex;
        font-size: var(--font-size-default);
    }
    .content-wrapper {
        padding-bottom: 6em;
        overflow-y: scroll;
        min-height: calc(100vh - (var(--top-bar-height) + var(--bottom-bar-height)));
        background-color: var(--grey);
    }
    a {
        text-decoration: none;
    }
    #bottom {
        display: none;
        position: fixed;
        bottom: 0;
        flex-direction: row;
        justify-content: stretch;
        align-items: center;
        padding: 0.5em 0;
        width: 100%;
        box-shadow: 0 -0.06em 0.125em #0004;
        background-color: var(--background-color);
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
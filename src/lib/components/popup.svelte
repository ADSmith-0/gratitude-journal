<script>
	import PopupBackground from "./popupBackground.svelte";

    export let closeBtn = true;
    
    // closePopup to inherit from parent
    export const closePopup = () => {}
</script>
<PopupBackground>
    <div class="wrapper" on:blur={closePopup} use:focus>
        <section class="bar">
            {#if closeBtn}
                <span class="btn-wrapper">
                    <button class="button" on:click={closePopup}>✕</button>
                </span>
            {/if}
            <slot name="title"></slot>
        </section>
        <div class="input-wrapper">
            <slot name="inputs"></slot>
        </div>
    </div>
</PopupBackground>
<style>
    .wrapper {
        background-color: var(--background-color);
        border-radius: var(--radius);
        width: 95%;
        position: fixed;
        left: 2.5%;
        top: 15%;
        height: 50%;
        width: 95%;
        z-index: 99;
    }
    .bar {
        padding: 0.3em;
    }
    .bar .btn-wrapper {
        display: flex;
        justify-content: flex-end;
    }
    .bar button {
        align-self: flex-start;
        padding: 0.2em 0.4em;
        box-shadow: none;
        background-color: var(--background-color);
    }
    slot[name="title"] {
        font-size: var(--font-small);
        display: inline-block;
        font-family: var(--accent-font);
        padding: 0.5em 0 0 1em;
    }
</style>
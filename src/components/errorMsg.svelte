<script>
    export let visible = false;
    export let message = "";
</script>
<section class="container {visible ? 'visible' : ""}">
    <img src="./img/warning-icon-black-67x67.png" alt="warning symbol">
    <p>{message}</p>
</section>
<style>
    .container {
        margin-top: 0.5em;
        opacity: 0;
        background-color: var(--red);
        padding: 0.5em;
        padding-left: 4em;
        display: flex;
        flex-direction: row;
        gap: 1.5em;
        align-items: center;
        justify-content: space-around;
    }
    .container.visible {
        transition: opacity 0.5s ease-in-out 0s;
        opacity: 1;
    }
    img {
        height: 2em;
        width: 2em;
        flex: 1;
    }
    .container p {
        font-family: var(--accent-font);
        font-size: var(--font-small);
        flex: 15;
    }
</style>
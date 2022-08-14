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
        margin-top: 1em;
        opacity: 0;
        background-color: var(--red);
        padding: 1em;
        padding-left: 2.5em;
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
        height: 2.4em;
        width: 2.4em;
        flex: 1;
    }
    .container p {
        /* color: white; */
        font-family: var(--accent-font);
        /* text-align: center; */
        flex: 20;
    }
</style>
<script>
    import SigninPopup from "../components/signin-popup.svelte";
</script>
<main>
    <h1>Welcome to Gratitude.io</h1>
    <p><em>Did you know?</em><br>There have been studies linking gratitude journals to increased happiness and reduced stress</p>
    <SigninPopup/>
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        justify-content:space-evenly;
        gap: 1.25em;
        margin: 0 1em;
    }
    main h1 {
        text-align: center;
        margin-top: 1em;
        font-size: var(--font-large);
        color: var(--font-color);
    }
    main p {
        margin: 0 1.25em;
        color: var(--font-color);
    }
    h1 {
        font-family: var(--accent-font);
        font-size: var(--font-normal);
        font-weight: 400;
    }
    p, em {
        font-family: var(--accent-font);
        font-size: var(--font-size-default);
    }
</style>
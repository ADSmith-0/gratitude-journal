<main>
    <h1>Welcome to Gratitude.io</h1>
    <p><em>Did you know?</em><br>There have been studies linking gratitude journals to increased happiness and reduced stress</p>
    <section class="container">
        <p>
            Create an account or login to continue
        </p>
        <div class="buttons">
            <a href="/sign-up" class="button blue">Sign up</a>
            <a href="/login" class="button pink">Login</a>
        </div>
    </section>
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
    }
    main p {
        margin: 0 1.25em;
    }
    .container {
        border-radius: var(--radius);
        border: 0.063em solid black;
        box-shadow: 0 0.25em 0.25em #0002;
        margin: 1.25em;
        padding: 0.63em 0.125em;
        min-height: 25vh;
        display: flex;
        flex-direction: column;
        gap: 0.63em;
        justify-content: space-evenly;
        align-items: center;
    }
    .container p {
        font-size: var(--font-normal);
        text-align: center;
        margin: 0 0.7em;
    }
    .buttons {
        display:flex;
        gap: 1.25em;
    }
    a {
        text-decoration: none;
    }
    h1 {
        font-family: var(--accent-font);
        font-size: var(--font-normal);
        font-weight: 400;
    }
    p, em {
        font-family: var(--accent-font);
        font-size: var(--font-x-small);
    }
</style>
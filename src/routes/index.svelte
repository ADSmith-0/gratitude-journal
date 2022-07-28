<main>
    <div id="container">
        <p>
            Create an account or login to continue
        </p>
        <div id="buttons">
            <a href="/sign-up" class="button blue">Sign up</a>
            <a href="/login" class="button pink">Login</a>
        </div>
    </div>
    <section>
        <h1>Why use a gratitude journal?</h1>
        <p>There have been studies linking gratitude journals to increased happiness</p>
    </section>
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        justify-content:space-evenly;
    }
    #container {
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
    #container p {
        font-size: var(--font-large);
        text-align: center;
    }
    #buttons {
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
    p {
        font-family: var(--accent-font);
        font-size: var(--font-small);
    }
    section {
        margin: 1.25em;
    }
    section p {
        font-size: var(--font-x-small);
    }
</style>
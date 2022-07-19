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
        border: 1px solid black;
        box-shadow: 0px 4px 4px #0002;
        margin: 10px;
        padding: 10px;
        min-height: 30vh;
        display: flex;
        flex-direction: column;
        gap: 10px;
        justify-content: space-evenly;
        align-items: center;
    }
    #container p {
        font-size: var(--font-m-title);
    }
    #buttons {
        display:flex;
        gap: 20px;
    }
    h1 {
        font-family: var(--accent-font);
        font-size: var(--font-normal);
    }
    p {
        font-family: var(--accent-font);
        font-size: var(--font-small);
    }
    a {
        text-decoration: none;
    }
</style>
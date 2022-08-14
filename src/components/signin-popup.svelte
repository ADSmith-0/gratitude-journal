<script>
    export let type = "";
</script>
<section class="container {type}">
    <p>
        Create an account or login to continue
    </p>
    <div class="buttons">
        <a href="/sign-up" class="button blue">Sign up</a>
        <a href="/login" class="button pink">Login</a>
    </div>
</section>
<style>
    .container {
        border-radius: var(--radius);
        border: 0.063em solid black;
        box-shadow: 0 0.25em 0.25em #0002;
        background-color: #fff;
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
        font-family: var(--accent-font);
        font-size: var(--font-normal);
        text-align: center;
        margin: 0 0.7em;
    }
    .container.popup {
        position: absolute;
        top: 25vh;
        z-index: 99;
    }
    .buttons {
        display:flex;
        gap: 1.25em;
    }
    a {
        text-decoration: none;
    }
</style>
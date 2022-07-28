<script lang="ts">
    import InputBox from './inputBox.svelte';
    export let name:string;
</script>
<section id="container">
    <button id="btn-google">
        <img src="/img/google-icon-96x96.png" alt="google icon">
        {name} with google
    </button>
    <section id="or-section">
        <hr class="line">
        <p>or</p>
        <hr class="line">
    </section>
    <InputBox name="Email" type="text"/>
    <InputBox name="Password" type="password"/>
    {#if name == "Sign up"}
    <a href="/login">Have an account already? Login</a>
    {:else}
    <a href="/sign-up">Don't have an account? Sign up</a>
    {/if}

    <button id="submit" class="button green">{name}</button>
</section>
<style>
    #container {
        display: flex;
        flex-direction: column;
        gap: 0.63em;
        justify-content: space-evenly;
        align-items: center;
        margin-top: 3.1em;
    }
    #btn-google {
        border: 0.19em solid var(--blue);
        border-radius: var(--radius);
        display: flex;
        flex-direction: row;
        gap: 1.125em;
        background: none;
        padding: 0.95em;
    }
    #btn-google img{
        height: 2.18em;
        width: 2.18em;
    }
    #or-section {
        align-self: center;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        gap: 1.88em;
        width: 80%;
        margin: 1.125em 0;
    }
    .line {
        flex: 3;
        align-self: center;

    }
    a {
        font-size: var(--font-normal);
        text-align: center;
    }
    #submit {
        border: none;
        cursor: pointer;
    }
</style>
<script lang="ts">
    import InputBox from './inputBox.svelte';
    export let name:string;
</script>
<section class="container">
    {#if name == "Sign up"}
    <a href="/login" class="link">Have an account already? Login</a>
    {:else}
    <a href="/sign-up" class="link">Don't have an account? Sign up</a>
    {/if}
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
    <button id="submit" class="button green">{name}</button>
</section>
<style>
    .container {
        display: flex;
        flex-direction: column;
        gap: 1.5em;
        justify-content: space-evenly;
        align-items: center;
        margin-top: 1.5em;
    }
    #btn-google {
        border: 0.19em solid var(--blue);
        border-radius: var(--radius);
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 1.125em;
        background: none;
        padding: 0.7em 0.95em;
        font-weight: 400;
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
        margin: 0.2em 0;
    }
    .line {
        flex: 3;
        align-self: center;
        border: 0.05em solid #000;
    }
    .link {
        font-size: var(--font-small);
        text-align: center;
        font-weight: 400;
    }
    #submit {
        border: none;
        cursor: pointer;
    }
</style>
<script lang="ts">
    import InputBox from './inputBox.svelte';
    export let name:string;
</script>
<section id="container">
    <button id="btn-google">
        <img src="/google-icon-96x96.png" alt="google icon">
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
        gap: 10px;
        justify-content: space-evenly;
        align-items: center;
        margin-top: 50px;
    }
    #btn-google {
        border: 3px solid var(--blue);
        border-radius: var(--radius);
        display: flex;
        flex-direction: row;
        gap: 20px;
        background: none;
        padding: 15px;
    }
    #btn-google img{
        height: 35px;
        width: 35px;
    }
    #or-section {
        align-self: center;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        gap: 30px;
        width: 80%;
        margin: 20px 0;
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
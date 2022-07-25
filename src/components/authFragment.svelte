<script lang="ts">
    import InputBox from './inputBox.svelte';
    export let name:string;
</script>
<section id="container">
    <button>
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

    <button id="submit" class="button green">{name == "Sign up" ? "Sign up" : "Login"}</button>
</section>
<style>
    #container {
        display: flex;
        flex-direction: column;
        gap: 10px;
        justify-content: space-evenly;
        align-items: center;
    }
    #or-section {
        align-self: center;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        gap: 30px;
        width: 80%;
        /* margin: auto; */
    }
    .line {
        flex: 3;
        /* height: 10px; */
        align-self: center;
        /* border: 1px solid black; */
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
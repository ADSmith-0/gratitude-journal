<script>
    import AuthUser from '$lib/components/authUser.svelte';

    export let form;
    
    let name = "Login";

    // When name changes reset form, so errors disappear
    $: if(name){
        form = "";
    }
</script>
<section class="container">
    <section class="selector">
        <button class="button" on:click={() => name = "Login"}>Login</button>
        <button class="button" on:click={() => name = "Sign up"}>Sign up</button>
        <div class="underline" class:translate={name === "Sign up"}></div>
    </section>
    {#if name === "Login"}
    <AuthUser submit="Login" action="?/login" form={form}/>
    {:else if name === "Sign up"}
    <AuthUser submit="Sign up" action="?/signup" on:signup={() => name = "Login"} form={form}/>
    {/if}
</section>
<style>
    .container {
        display: flex;
        flex-direction: column;
        gap: 1.75em;
        justify-content: space-evenly;
        align-items: center;
        background: var(--background-color);
        padding: 1em;
        box-shadow: var(--box-shadow);
    }
    .selector {
        position: relative;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
    }
    .selector button {
        width: 100%;
        height: 100%;
        box-shadow: none;
        border-radius: 0;
        background-color: var(--background-color);
    }
    .selector button:first-child {
        border-right: 2px solid var(--dark-grey);
    }
    .underline {
        border-bottom: 3px solid #000;
        width: 5em;
        height: 1px;
        position: absolute;
        bottom: 0;
        left: 12.5%;
        transition: all 0.3s cubic-bezier(.68,-0.55,.27,1.55) 0s;
    }
    .translate {
        left: 63%;
    }
</style>
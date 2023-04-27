<script>
    import AuthUser from '$lib/components/authUser.svelte';

    let name = "Login";
    let action = "login";
    
    const actionFromName = name => name.replace(/\s/g, "").toLowerCase();

    const setName = e => {
        const newName = e.target.innerHTML;
        if(newName !== name){
            name = newName;
            action = actionFromName(newName);
        }
    }

    let authUser;
    const changeToLogin = response => {
        if(name === "Sign up"){
            name = "Login";
            authUser.clearInputs();
        }
    };
</script>
<section class="container">
    <section class="selector">
        <button class="button" on:click={setName}>Login</button>
        <button class="button" on:click={setName}>Sign up</button>
        <div class="underline" class:translate={name==="Sign up"}></div>
    </section>
    <AuthUser 
        submit={name}
        action={action}
        callback={changeToLogin}
        bind:this={authUser}
    />
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
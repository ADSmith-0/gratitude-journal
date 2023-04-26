<script>
    import { enhance } from '$app/forms';
    import CustomInput from './customInput.svelte';
    import PasswordInput from './passwordInput.svelte';
    
    export let submit="Sign up";
    export let action = submit.replace(/\s/g, "").toLowerCase();

    let loading = false;
</script>
<form class="container" method="POST" action={"?/"+action} use:enhance>
    <CustomInput 
        name="email"
        label="Email"
        type="text"
        validation="email"
    />
    <PasswordInput />
    {#if loading}
    <button class="button bg-default-grey loading" disabled="true"><img class="rotating" src="/img/refresh-icon-black-48x48.png" alt="Loading icon"></button>
    {:else}
    <button id="submit" type="submit" class="button bg-green">{submit}</button>
    {/if}
</form>
<style>
    .container {
        display: flex;
        flex-direction: column;
        gap: 1.75em;
        justify-content: space-evenly;
        align-items: center;
        background: var(--background-color);
        padding: 2em 1em;
        border-radius: var(--radius-less);
    }
    #submit {
        border: none;
        cursor: pointer;
        margin-top: 0.8em;
    }
    .loading {
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: not-allowed;
    }
    .loading img {
        height: 1.5em;
        width: 1.5em;
    }
    .rotating {
        animation: rotating 2s linear infinite;

    }
    @keyframes rotating {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
</style>
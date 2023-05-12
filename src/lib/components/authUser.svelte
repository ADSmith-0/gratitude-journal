<script>
    import { enhance } from '$app/forms';
    import CustomInput from './customInput.svelte';
    import PasswordInput from './passwordInput.svelte';
    import Loading from './loading.svelte';
    import Snackbar from './snackbar.svelte';
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    const dispatchEvent = {
        "?/login": "login",
        "?/signup": "signup"
    };
    
    export let submit = "Login";
    export let action = "?/login";
    export let form;

    let loading = false;

    const handleEnhance = () => {
        loading = true;

        return async ({ result, update }) => {
            loading = false;

            if(result.type === "success"){
                const event = dispatchEvent[action];
                if(event){
                    dispatch(event);
                }
            }

            update();
        }
    }
</script>
<form class="container" method="POST" action={action} use:enhance={handleEnhance}>
    {#if form?.error}
    <Snackbar variant="error" dismissable={false}>
        <span slot="message" class="bold x-sm-font">{form?.error}</span>
    </Snackbar>
    {/if}
    <CustomInput 
        name="email"
        label="Email"
        type="email"
        validation="email"
    />
    <PasswordInput />
    {#if loading}
    <button class="button bg-default-grey loading" disabled="true"><Loading /></button>
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
</style>
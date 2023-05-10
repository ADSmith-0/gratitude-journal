<script>
    import { enhance } from '$app/forms';
    import CustomInput from './customInput.svelte';
    import PasswordInput from './passwordInput.svelte';
    import Loading from './loading.svelte';
    import Banner, { Icon, Label } from '@smui/banner';
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    const dispatchEvent = {
        "?/login": "login",
        "?/signup": "signup"
    };
    
    export let submit = "Login";
    export let action = "?/login";
    export let form;
    let open = true;

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
    <Banner
        class="bg-light-red"
        bind:open
        on:SMUIBanner:closed={() => open = false}
    >
        <Icon slot="icon" class="sm-font material-icons bg-white txt-light-red" size="button">priority_high</Icon>
        <Label slot="label" class="sm-font txt-white font-body ">{form?.error}</Label>
    </Banner>
    {/if}
    <CustomInput 
        name="email"
        label="Email"
        type="email"
        value={form?.email ?? ""}
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
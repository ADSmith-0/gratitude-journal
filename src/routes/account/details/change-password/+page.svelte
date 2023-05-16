<script>
	import { enhance } from "$app/forms";
    import BackButton from "$lib/components/backButton.svelte";
	import PasswordInput from "$lib/components/passwordInput.svelte";
	import Snackbar from "$lib/components/snackbar.svelte";

    export let form;
</script>
<BackButton href="/account/details" />
<div class="wrapper card flex-column-center">
    <h1>Change password:</h1>
    {#if form?.error}
    <Snackbar variant="error" dismissable={false}>
        <p slot="message">{form?.error}</p>
    </Snackbar>
    {/if}
    <form method="POST" class="flex-column-center" use:enhance>
        <PasswordInput />
        <PasswordInput 
            label="Confirm Password"
            name="confirmPassword"
        />
        <button class="button small bg-green" type="submit">Submit</button>
    </form>
</div>
<style>
    .wrapper {
        margin: auto;
        margin-top: 2rem;
        width: 70%;
        gap: 2rem;
        padding-bottom: 1.5rem;
    }
    h1 {
        font-size: var(--font-normal);
    }
</style>

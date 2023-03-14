<script>
    import { login, signup } from '../db-firebase.js';
    import InputBox from './inputBox.svelte';
    export let name;
    export let action = name.replace(/\s/g, "").toLowerCase();
    export let onSuccessfulSignup = res => res;
    export let onSuccessfulLogin = res => res;
    export let onSuccessfulReauth = res => res;
    let loading = false;
    let emailInput, passwordInput;

    let fields = {
        email: "",
        password: ""
    };
    let errorsVisible = false;

    const setErrorsVisible = bool => errorsVisible = bool;

    export const clearInputs = () => {
        fields["email"] = "";
        fields["password"] = "";
        emailInput.clear();
        passwordInput.clear();
    }

    export const blurInputs = () => {
        emailInput.blur();
        passwordInput.blur();
    }

    export const resetErrors = () => setErrorsVisible(false);

    export const resetPage = () => {
        clearInputs();
        blurInputs();
        resetErrors();
    }

    const updateField = (id, newValue) => fields[id] = newValue;

    const findEmptyField = () => {
        for(let key in fields){
            if(!fields[key] || fields[key] == ""){
                return key;
            }
        }
        return false;
    }

    const setEmailInputError = error => {
        emailInput.setErrorMessage(error.toTitleCase());
        errorsVisible = true;
    }

    const makeRequest = request => {
        loading = true;
        request
        .catch(error => setEmailInputError(error))
        .finally(() => loading = false)
    }
   
    const handleReauth = () => {
        if(findEmptyField()){
            setErrorsVisible(true);
            return false;
        }

        const { email, password } = fields;
        
        makeRequest(login(email, password, onSuccessfulReauth));
    }

    const handleSignup = () => {
        if(findEmptyField()){
            setErrorsVisible(true);
            return false;
        }

        const { email, password } = fields;
        
        makeRequest(signup(email, password, onSuccessfulSignup));
    }

    const handleLogin = () => {
        if(findEmptyField()){
            setErrorsVisible(true);        
            return false;
        }

        const { email, password } = fields;

        makeRequest(login(email, password, onSuccessfulLogin));
    }

    const doAction = () => {
        const actions = {
            "login": handleLogin,
            "signup": handleSignup,
            "reauth": handleReauth
        }
        console.log(actions[action]);
        
        actions[action]();
    }

    let ctaBtn;
    // Event Listener for keypresses to listen for enter being pressed
    const listenForEnter = e => {
        if(e.key === "Enter"){
            ctaBtn.click();
        }
    }
</script>
<svelte:window on:keydown={listenForEnter} />
<section class="container">
    <InputBox 
        id="email"
        placeholder="Email"
        type="text"
        passValueBack={updateField}
        validateAs="email"
        errorVisible={errorsVisible}
        bind:this={emailInput}
    />
    <InputBox
        id="password"
        placeholder="Password"
        type="password"
        passValueBack={updateField}
        errorVisible={errorsVisible}
        bind:this={passwordInput}
    />
    {#if loading}
    <button class="button bg-default-grey loading" disabled="true"><img class="rotating" src="/img/refresh-icon-black-48x48.png" alt="Loading icon"></button>
    {:else}
    <button id="submit" class="button bg-green" on:click={doAction} bind:this={ctaBtn}>{name}</button>
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
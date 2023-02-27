<script>
    import { auth } from '../firebase.js';
    import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
    import InputBox from './inputBox.svelte';
	import { goto } from '$app/navigation';
	import { browser } from '$app/environment';
    export let name;
    let loading = false;
    let emailInput, passwordInput;

    let fields = {
        email: "",
        password: ""
    };
    let errorsVisible = false;

    if(browser && !!localStorage.getItem("accessToken")){
        goto("/account/details");
    }

    const setErrorsVisible = bool => errorsVisible = bool;

    export const clearInputs = () => {
        emailInput.clear();
        passwordInput.clear();
    }
    
    export const resetErrors = () => setErrorsVisible(false);

    const updateField = values => {
        const [ id, newValue ] = values;
        fields[id] = newValue;
    }

    const findEmptyField = () => {
        for(let key in fields){
            if(!fields[key] || fields[key] == ""){
                return key;
            }
        }
        return false;
    }

    const signup = async () => {
        if(findEmptyField()){
            setErrorsVisible(true);
            return false;
        }

        const { email, password } = fields;
        
        const createUser = createUserWithEmailAndPassword(auth, email, password);
        loading = true;
        createUser.then(() => {
            name="Login";
            fields["email"] = "";
            fields["password"] = "";
            emailInput.clear();
            passwordInput.clear();
            emailInput.blur();
            passwordInput.blur();
            setErrorsVisible(false);
        })
        .catch(error => {
            const errorCode = error.code;
            // const errorMessage = error.message;
            const readableErrorCode = errorCode.split("/")[1].replace(/-/g, " ");
            emailInput.setErrorMessage(readableErrorCode.toTitleCase());
            errorsVisible = true;
        })
        .finally(() => {
            loading = false;
        });
    }

    const login = async () => {
        if(findEmptyField()){
            setErrorsVisible(true);        
            return false;
        }

        const auth = getAuth();

        const { email, password } = fields;

        const signIn = signInWithEmailAndPassword(auth, email, password);
        loading = true;
        signIn.then(userCredential => {
            localStorage.setItem("accessToken", userCredential.user.accessToken);
            goto("/account/details");
        })
        .catch(error => {
            const errorCode = error.code;
            // const errorMessage = error.message;
            const readableErrorCode = errorCode.split("/")[1].replace(/-/g, " ");
            emailInput.setErrorMessage(readableErrorCode.toTitleCase());
            errorsVisible = true;
        })
        .finally(() => {
            loading = false;
        });
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
    <button class="button bg-default-grey loading" disabled="true"><img class="rotating" src="./img/refresh-icon-black-48x48.png" alt="Loading icon"></button>
    {:else}
    <button id="submit" class="button bg-green" on:click={name=="Sign up" ? signup : login} bind:this={ctaBtn}>{name}</button>
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
<script>
    import { auth } from '../firebase.js';
    import { createUserWithEmailAndPassword } from 'firebase/auth';
    import InputBox from './inputBox.svelte';
    export let name;
    let loading = false;
    let emailInput, passwordInput;

    let fields = {
        email: "",
        password: ""
    };
    let errorsVisible = false;

    const setErrorsVisible = bool => errorsVisible = bool;

    const setName = newName => {
        name = newName;
        emailInput.clear();
        passwordInput.clear();
    }

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

    const trySignup = async () => {
        if(findEmptyField()){
            setErrorsVisible(true);
            return false;
        }

        const { email, password } = fields;
        
        const createUser = createUserWithEmailAndPassword(auth, email, password);
        loading = true;
        createUser.then((userCredential) => {
            loading = false;
            name="Login";
            fields["email"] = "";
            fields["password"] = "";
            emailInput.clear();
            passwordInput.clear();
            setErrorsVisible(false);
        })
        .catch((error) => {
            loading = false;
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(`${errorCode}: ${errorMessage}`);
        });
    }

    const tryLogin = async () => {
        if(findEmptyField()){
            setErrorsVisible(true);        
            return false;
        }
    }
</script>
<section class="container">
    <section class="selector">
        <button class="button" on:click={() => setName("Login")}>Login</button>
        <button class="button" on:click={() => setName("Sign up")}>Sign up</button>
        <div class={"underline " + (name=="Sign up" && "translate")}></div>
    </section>
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
    <button id="submit" class="button bg-green" on:click={name=="Sign up" ? trySignup : tryLogin}>{name}</button>
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
        padding-bottom: 2em;
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
    .link {
        font-size: var(--font-size-default);
        text-align: center;
        font-weight: 400;
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
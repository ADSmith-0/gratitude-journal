<script>
    import InputBox from './inputBox.svelte';
    import ErrorMsg from './errorMsg.svelte';
    export let name;

    let fields = {
        email: undefined,
        password: undefined
    };
    let errorMessage = "";
    let errorVisible = false;

    const updateField = e => {
        const { id, newValue } = e.target;
        fields[id] = newValue;
    }

    const doesEmailExist = async (email) => {
        const checkDBForEmail = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({ "matched": true });
            }, 1000);
        })
        return (await checkDBForEmail);
    }

    const setError = (message, visible) => {
        errorMessage = message;        
        errorVisible = visible;
    }

    const signupWithGoogle = () => {
        // TODO GOOGLE API
    }

    const loginWithGoogle = () => {
        // TODO GOOGLE API
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
        const emptyField = findEmptyField();
        if(emptyField){
            setError("Enter your "+emptyField, true);
            return false;
        }

        const { matched } = await doesEmailExist(fields["email"]);
        if(matched){
            setError("Email already exists", true);
            return false;
        }
        
        // TODO SERVER SIDE: add to db
    }

    const areLoginDetailsCorrect = async () => {
        const detailsCorrect = await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({ "status": 200 });
            }, 1000);
        });
        return (await detailsCorrect);
    }

    const tryLogin = async () => {
        const emptyField = findEmptyField();
        if(emptyField){
            setError("Enter your "+emptyField, true);           
            return false;
        }        

        const isCorrectDetails = await areLoginDetailsCorrect();
        if(isCorrectDetails == 404){
            setError("Incorrect email or password, check and try again", true);
            return false;
        }

        if(isCorrectDetails == 200){
            // TODO SERVER SIDE: login code
        }
    }


</script>
<section class="container">
    <section class="selector">
        <button class="button" on:click={() => name="Login"}>Login</button>
        <button class="button" on:click={() => name="Sign up"}>Sign up</button>
        <div class={"underline " + (name=="Sign up" && "translate")}></div>
    </section>
    <InputBox id="email" name="Email" type="text" passValueBack={updateField} validateAs="email"/>
    <InputBox id="password" name="Password" type="password" passValueBack={updateField}/>
    <button id="submit" class="button bg-green" on:click={name=="Sign up" ? trySignup : tryLogin}>{name}</button>
    <!-- TODO: if not used remove google IMG -->
    <!-- <button id="btn-google" on:click={name=="Sign up" ? signupWithGoogle : loginWithGoogle}>
        <img src="/img/google-icon-96x96.png" alt="google icon">
        {name} with google
    </button> -->
    {#if name == "Sign up"}
    <a href="/login" class="link">Have an account already? Login</a>
    {:else}
    <a href="/sign-up" class="link">Don't have an account? Sign up</a>
    {/if}
</section>
<ErrorMsg visible={errorVisible} message={errorMessage}/>
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
        /* transform: translateX(10.7em); */
        /* transform: translateX(216%); */
        left: 63%;
    }

    /* TODO: Remove if unused */
    /* #btn-google {
        border: 0.15em solid var(--blue);
        border-radius: var(--radius);
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 1.125em;
        background: none;
        padding: 0.6em 0.8em;
        font-weight: 400;
    }
    #btn-google img{
        height: 2em;
        width: 2em;
    } */
    .link {
        font-size: var(--font-size-default);
        text-align: center;
        font-weight: 400;
    }
    #submit {
        border: none;
        cursor: pointer;
        margin-top: 2em;
    }
</style>
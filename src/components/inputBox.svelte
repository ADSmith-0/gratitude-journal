<script>
	export let id;
    export let placeholder;
    export let type;
    export let passValueBack; //Function
    export let validateAs = undefined;
    export let errorVisible = false;
    
    let rawValue = "", errorMessage = "", style = "";

    export const clear = () => {
        rawValue = "";
        style = "";
    }

    let input;
    export const blur = () => input.blur();

    export const setErrorMessage = msg => errorMessage = msg;

    const updateRawValue = e => rawValue = e.target.value;

    const regexPatterns = {
        "email": /^[\w|\d]+(\.[\w|\d]+)*@[\w|\d]+(\.[\w|\d]+)+$/,
        "text": /[a-zA-Z]+/,
        "number": /\d+/
    }

    const isValueEmpty = value => value == ""; 

    const validateValue = value => {
        const validationCriteria = validateAs?.toLowerCase() || "text";
        return regexPatterns[validationCriteria].test(value);
    }

    const checkValue = value => {
        if(isValueEmpty(value)){
            errorMessage = "Please enter a value";
            return;
        }
        errorMessage = "";
        style = "active";
        const valueValid = validateValue(value);
        if(!valueValid){
            errorMessage = `Please enter a valid ${id}`;
            passValueBack(id, "");
            return;
        }
        passValueBack(id, value);
    }
    const scrollToStart = e => e.target.scrollTo(0,0);
    let passwordVisible = false;
    const toggleVisible = () => {
        passwordVisible = !passwordVisible;
        type = (passwordVisible) ? "text" : "password";
    }

    $: checkValue(rawValue);

    $: error = errorVisible && errorMessage
</script>
<section class="container {style}" class:error>
    <!-- Can't use bind because of variable type -->
    <input type={type} value={rawValue} on:input={updateRawValue} on:blur={scrollToStart} bind:this={input}>
    <span class="placeholder">{placeholder}</span>
    {#if id == "password"}
    <button on:click={toggleVisible}>
    {#if passwordVisible}
        <img src="/img/hide-black-icon-48x48.png" alt="hide password icon">
    {:else}
        <img src="/img/eye-black-icon-48x48.png" alt="show password icon">
    {/if}
    </button>
    {/if}
    {#if errorVisible && errorMessage}
    <span class="error-msg">
        <img src="./img/exclamation-mark-icon-red-48x48.png" alt="Warning symbol">
        {errorMessage}
    </span>
    {/if}
</section>

<style>
    :root {
        --y-coordinate: 0.6em;
        --padding: 0.63em;
        --input-width: 75vw;
    }
    input {
        outline: none;
        border: 0 solid black;
        border-bottom-width: 0.12em;
        font-family: var(--accent-font);
        font-size: var(--font-size-default);
        height: 1.65em;
        padding: var(--padding);
        width: var(--input-width);
    }
    .container {
        position: relative;
        margin: 0.5em 0;
        --color: var(--blue);
    }
    .container.error {
        --color: var(--red);
    }
    .placeholder {
        position: absolute;
        top: var(--y-coordinate);
        left: 0.5em;
        font-weight: 400;
        font-family: var(--accent-font);
        font-size: var(--font-small);
        color: #666;
        transition: all 0.1s ease-in-out 0s;
        pointer-events: none;
    }
    input:focus,
    .active input {
        border-color: var(--color);
    }
    input:focus ~ .placeholder,
    .active .placeholder{
        color: var(--color);
        font-size: var(--font-size-default);
        transform: translateY(calc(-1*var(--y-coordinate) - 1.1em));
    }
    .container button {
        position: absolute;
        top: 15%;
        right: 0.5em;
        height: 1.5em;
        width: 1.5em;
        background-color: transparent;
        border: none;
    }
    .container button img {
        height: 100%;
        width: 100%;
    }
    .error-msg {
        color: var(--red);
        font-weight: 400;
        font-size: var(--font-x-small);
        display: flex;
        align-items: center;
        margin-top: 0.2em;
    }
    .error-msg img {
        height: 1em;
        width: 1em;
        margin-right: 0.3em;
    }
</style>
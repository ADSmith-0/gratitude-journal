<script>
    export let id;
    export let name;
    export let type;
    export let passValueBack; //Function
    export let validateAs = undefined;

    const regexPatterns = {
        "email": /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
        "text": /[a-zA-Z]+/,
        "number": /\d+/
    }

    const validateInput = value => {
        const validationCriteria = validateAs?.toLowerCase() || "text";
        return regexPatterns[validationCriteria].test(value);
    }

    let style = "";
    const checkInput = e => {
        const value = e.target.value;
        
        style = (value.length !== 0) ? "active" : "";

        e.target.newValue = (validateInput(value)) ? value : undefined;
        passValueBack(e);
    }
    const scrollToStart = e => e.target.scrollTo(0,0);
    const focusInput = e => {
        const inputBox = e.target.parentElement.querySelector('input');
        inputBox.focus();
    }
    let passwordVisible = false;
    const toggleVisible = () => {
        passwordVisible = !passwordVisible;
        type = (passwordVisible) ? "text" : "password";
    }
</script>
<section class="container {style}">
    <input id={id} type={type} on:input={checkInput} on:blur={scrollToStart}>
    <!-- TODO change to button -->
    <p class="placeholder" on:click={focusInput} role="button">{name}</p>
    {#if name == "Password"}
    <!-- TODO change to button -->
    <button on:click={toggleVisible}>
    {#if passwordVisible}
        <img src="/img/hide-black-icon-48x48.png" alt="hide password icon">
    {:else}
        <img src="/img/eye-black-icon-48x48.png" alt="show password icon">
    {/if}
    </button>
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
    }
    input:focus,
    .active input {
        border-color: var(--blue);
    }
    input:focus ~ p.placeholder,
    .active p.placeholder{
        color: var(--blue);
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
</style>
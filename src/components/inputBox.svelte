<script>
    export let id;
    export let name;
    export let type;
    export let onInput; //Function
    export let validateAs = undefined;

    const validateInput = value => {
        const validationCriteria = validateAs?.toLowerCase() || "text";
        switch(validationCriteria){
            case "email":
                const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
                return emailRegex.test(value);
            case "text":
                return (typeof value == "string");
            default:
                console.error("cannot find: ", validationCriteria);
                break;
        }
    }

    let style = "";
    const checkInput = e => {
        const value = e.target.value;
        
        style = (value.length !== 0) ? "active" : "";

        e.target.newValue = (validateInput(value)) ? value : undefined;
        onInput(e);
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
    <p class="placeholder" on:click={focusInput}>{name}</p>
    {#if name == "Password"}
    <img 
        src="/img/{passwordVisible ? 'hide' : 'eye'}-black-icon-96x96.png"
        alt="{passwordVisible ? 'hide' : 'eye'} password icon"
        on:click={toggleVisible}
    >
    {/if}
</section>

<style>
    :root {
        --y-coordinate: 0.65em;
        --padding: 0.63em;
        --input-width: 75vw;
    }
    input {
        border-radius: var(--radius);
        outline: none;
        border: 0.12em solid black;
        font-family: var(--accent-font);
        font-size: var(--font-small);
        height: 2em;
        padding: var(--padding);
        width: var(--input-width);
    }
    .container {
        position: relative;
    }
    .placeholder {
        position: absolute;
        top: var(--y-coordinate);
        left: 0.63em;
        font-weight: 400;
        font-family: var(--accent-font);
        font-size: var(--font-normal);
        color: #666;
        transition: all 0.1s ease-in-out 0s;
        background-color: #fff;
        padding: 0 0.25em;
    }
    input:focus,
    .active input {
        border: 0.12em solid var(--blue);
    }
    input:focus ~ p.placeholder,
    .active p.placeholder{
        color: var(--blue);
        font-size: var(--font-x-small);
        transform: translateY(calc(-1*var(--y-coordinate) - 0.55em));
    }
    img {
        position: absolute;
        top: calc(var(--y-coordinate) + (var(--padding)/2));
        left: calc(var(--input-width) - 1.35em);
        height: 2.18em;
        width: 2.18em;
    }
</style>
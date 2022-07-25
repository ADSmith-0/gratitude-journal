<script lang="ts">
    export let name:string;
    export let type:string;

    let style = "";
    const checkInput = (e:any) => {
        const value = e.target.value;
        
        style = (value.length !== 0) ? "active" : "";
    }
    const scrollToStart = (e:any) => e.target.scrollTo(0,0);
    let passwordVisible = false;
    const toggleVisible = () => {
        passwordVisible = !passwordVisible;
        type = (passwordVisible) ? "text" : "password";
    }
</script>
<section id="container" class="{style}">
    <input type={type} on:input={checkInput} on:blur={scrollToStart}>
    <p id="placeholder">{name}</p>
    {#if name == "Password"}
    <img 
        src="/{passwordVisible ? 'hide' : 'eye'}-black-icon-96x96.png"
        alt="{passwordVisible ? 'hide' : 'eye'} password icon"
        on:click={toggleVisible}
    >
    {/if}
</section>

<style>
    :root {
        --y-coordinate: 14px;
        --input-width: 75vw;
    }
    input {
        border-radius: var(--radius);
        outline: none;
        border: 2px solid black;
        font-family: var(--accent-font);
        font-size: var(--font-small);
        height: 45px;
        padding: 10px;
        padding-bottom: 0;
        width: var(--input-width);
    }
    #container {
        position: relative;
    }
    #placeholder {
        position: absolute;
        top: var(--y-coordinate);
        left: 10px;
        font-weight: 400;
        font-family: var(--accent-font);
        font-size: var(--font-normal);
        color: #666;
        transition: all 0.1s ease-in-out 0s;
    }
    input:focus,
    .active input {
        border: 2px solid var(--blue);
    }
    input:focus ~ p#placeholder,
    .active p#placeholder{
        color: var(--blue);
        font-size: var(--font-x-small);
        transform: translateY(calc(-1*var(--y-coordinate)));
    }
    img {
        position: absolute;
        top: var(--y-coordinate);
        left: calc(var(--input-width) - 22px);
        height: 35px;
        width: 35px;
    }
</style>
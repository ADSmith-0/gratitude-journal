<script>
    export let key = "";
    export let label = "";
    export let checked = (localStorage.getItem(key) === "true");
    export let passCheckedBack = () => {};
    $: passCheckedBack(checked);
    $: localStorage.setItem(key, checked);
</script>
<div>
    <label class:checked>
        <input type="checkbox" bind:checked={checked}>
        {label}
    </label>
</div>
<style>
    div {
        position: relative;
    }
    label {
        font-family: var(--accent-font);
        font-size: var(--font-x-small);
    }
    label::before {
        content: "";
        position: relative;
        display: inline-block;
        top: 0.15rem;
        width: 1rem;
        height: 1rem;
        background-color: var(--background-color);
        border: 0.15rem solid var(--darker-grey);
        border-radius: var(--radius-less);
        box-sizing: border-box;
        margin-right: 0.15em;
    }
    label.checked::before {
        border-color: var(--green);
        background-color: var(--green);
    }
    label.checked::after {
        content: "";
        height: 0.5rem;
        width: 0.2rem;
        position: absolute;
        top: 0.35rem;
        left: 0.33rem;
        border: 0 solid #000;
        border-width: 0 0.13rem 0.13rem 0;
        transform: rotate(45deg); 
    }
    input {
        display: none;
    }
</style>
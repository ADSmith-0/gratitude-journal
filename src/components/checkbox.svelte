<script>
    export let label = "";
    export let checked = false;
    export let passCheckedBack = () => {};
    $: passCheckedBack(checked);
</script>
<div>
    <label class="{checked ? 'checked' : ''}">
        <input id="checkbox" type="checkbox" bind:checked={checked}>
        {label}
    </label>
</div>
<style>
    div {
        position: relative;
    }
    label {
        font-family: var(--accent-font);
    }
    label::before {
        content: "";
        position: relative;
        display: inline-block;
        top: 0.15rem;
        width: 1rem;
        height: 1rem;
        background-color: #fff;
        border: 0.15rem solid var(--darker-grey);
        border-radius: var(--radius-less);
        box-sizing: border-box;
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
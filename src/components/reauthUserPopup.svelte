<script>
	import AuthUser from "./authUser.svelte";

    export let setReauth = () => {};

    const closePopup = () => setReauth(false);

    const focus = node => {
        node.focus();
    }


</script>
<div class="background-wrapper">
    <div class="wrapper" on:blur={closePopup} use:focus>
        <section class="bar">
            <span class="btn-wrapper">
                <button class="button" on:click={closePopup}>✕</button>
            </span>
            <p>Please enter your login details to proceed</p>
        </section>
        <div class="input-wrapper">
            <AuthUser name="Login" action="reauth" />
        </div>
    </div>
</div>
<style>
    .background-wrapper {
        height: 100%;
        position: absolute;
        top: var(--navbar-height);
        left: 0;
        background-color: #000a;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        padding-top: 0.5em;
    }
    .wrapper {
        background-color: var(--background-color);
        border-radius: var(--radius);
        width: 95%;
    }
    .bar {
        padding: 0.3em;
    }
    .bar p {
        font-size: var(--font-small);
        display: inline-block;
        font-family: var(--accent-font);
        padding: 0.5em 0 0 1em;
    }
    .bar .btn-wrapper {
        display: flex;
        justify-content: flex-end;
    }
    .bar button {
        align-self: flex-start;
        padding: 0.2em 0.4em;
        box-shadow: none;
        background-color: var(--background-color);
    }
</style>
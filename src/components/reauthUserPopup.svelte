<script>
	import AuthUser from "./authUser.svelte";
	import Popup from "./popup.svelte";

    export let setReauth = () => {};
    export let onSuccessfulReauth = res => res;

    const closePopup = () => setReauth(false);
</script>
<Popup closePopup={closePopup}>
    <span slot="title">Please enter your login details to proceed</span>
    <span slot="inputs">
        <AuthUser 
            name="Login"
            action="reauth"
            onSuccessfulReauth={onSuccessfulReauth}
        />
    </span>
</Popup>
<style>
    span[slot="title"] {
        font-size: var(--font-small);
        display: inline-block;
        font-family: var(--accent-font);
        padding: 0.5em 0 0 1em;
    }
</style>
<script>
    import Navbar from '../components/navbar.svelte';
    import SigninPopup from '../components/signin-popup.svelte';
    import Blocker from '../components/blocker.svelte';
    
    const isUserAuthorised = () => {
        // TODO: checkToken();
        return true;
    }

    let userAuthorised = isUserAuthorised();
</script>
<Navbar>
    {#if userAuthorised}
        <slot></slot>
    {:else}
        <Blocker>
            <SigninPopup type="popup"/>
        </Blocker>
    {/if}
</Navbar>


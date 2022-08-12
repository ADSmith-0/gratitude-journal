<script>
    import Navbar from '../components/navbar.svelte';
    import SigninPopup from '../components/signin-popup.svelte';
    
    const isUserAuthorised = () => {
        // checkToken();
        return true;
    }

    let userAuthorised = isUserAuthorised();
</script>
<Navbar/>
{#if userAuthorised}
<slot></slot>
{:else}
<SigninPopup type="popup"/>
<div class="blocker"></div>
<style>
    .blocker {
        position: absolute;
        top: 0;
        right: 0;
        height: 95vh;
        width: 100%;
        overflow: hidden;
        background-color: #0003;
        z-index: 10;
    }
</style>
{/if}
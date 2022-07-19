<script>
    import M_Navbar from './m-navbar.svelte';
    import O_Navbar from './o-navbar.svelte';

    let windowWidth = 0;
</script>
<svelte:window bind:innerWidth={windowWidth}></svelte:window>
{#if windowWidth < 780}
    <M_Navbar/>
{ :else }
    <O_Navbar/>
{/if}
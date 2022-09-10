<script>
    export let disableWithClick = false;
    export let backgroundColor = "#0003";
    const disable = e => {
        // disableWithClick();
    }
</script>
{#if disableWithClick}
    <div class="blocker" style="background-color:{backgroundColor};" on:click={disable}>
        <slot></slot>
    </div>
{:else}
    <div class="blocker" style="background-color:{backgroundColor};">
        <slot></slot>
    </div>
{/if}
<style>
    .blocker {
        position: absolute;
        top: 0;
        left: 0;
        height: calc(100vh - 4em);
        width: 100vw;
        overflow: hidden;
        background-color: #0003;
        z-index: 10;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
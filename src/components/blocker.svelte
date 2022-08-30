<script>
    export let disableWithClick = false;
    const disable = e => {
        // disableWithClick();
    }
</script>
{#if disableWithClick}
    <div class="blocker" on:click={disable}>
        <slot></slot>
    </div>
{:else}
    <div class="blocker">
        <slot></slot>
    </div>
{/if}
<style>
    .blocker {
        position: absolute;
        top: 0;
        left: 0;
        height: 95vh;
        width: 100vw;
        overflow: hidden;
        background-color: #0003;
        z-index: 10;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
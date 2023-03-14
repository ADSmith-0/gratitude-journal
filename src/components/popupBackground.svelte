<div class="background-wrapper">
    <slot></slot>
</div>
<style>
    .background-wrapper {
        height: 100%;
        width: 100%;
        position: absolute;
        top: var(--navbar-height);
        left: 0;
        background-color: #000a;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        padding-top: 0.5em;
    }
</style>
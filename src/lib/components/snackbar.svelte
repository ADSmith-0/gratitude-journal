<script>
	import { Icon } from "@smui/icon-button";
    import { fly } from "svelte/transition";

    export let variant = "";
    export let dismissable = true;
</script>
<section class={`wrapper ${variant}`} aria-relevant="additions" in:fly="{{ x: 100, duration: 500 }}">
    <slot name="icon" aria-atomic="true">
        <Icon class="material-icons">
            {#if variant === "success"}
                done
            {:else if variant === "error"}
                priority_high
            {/if}
        </Icon>
    </slot>
    <slot name="message" aria-atomic="true"></slot>
    {#if dismissable}
    <button aria-atomic="true" title="Dismiss" type="button">
        <Icon class="material-icons">
            close
        </Icon>
    </button>
    {/if}
</section>
<style>
    .wrapper {
        display: grid;
        grid-template-columns: auto 1fr auto;
        place-items: center;
        gap: 0.8rem;
        padding: 0.7rem 0.9rem;
        border-radius: var(--radius);
    }
    button {
        padding: 0;
        margin: 0;
        background-color: transparent;
        border: none;
        height: 24px;
        width: 24px;
        cursor: pointer;
        align-self: right;
    }
    .error {
        background-color: var(--light-red);
    }
    .success {
        background-color: var(--green);
    }
</style>
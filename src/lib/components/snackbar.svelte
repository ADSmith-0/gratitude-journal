<script>
	import { Icon } from "@smui/icon-button";
    import { fade, fly } from "svelte/transition";
    import { createEventDispatcher } from "svelte";
    
    const dispatch = createEventDispatcher();

    export let variant = "";
    export let dismissable = true;
</script>
<section class={`wrapper ${variant}`} aria-relevant="additions" in:fly="{{ x: 100, duration: 500 }}" out:fade>
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
    <button aria-atomic="true" title="Dismiss" type="button" on:click={() => dispatch('close')}>
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
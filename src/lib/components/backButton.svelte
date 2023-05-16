<script>
    import { Icon } from "@smui/icon-button";

    export let href = "";
</script>
<a class="wrapper button small bg-white no-shadow" href={href}>
    <Icon class="material-icons">arrow_back</Icon>
</a>
<style>
    .wrapper {
        margin-left: 1rem;
        margin-top: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        max-width: 1rem;
    }
</style>
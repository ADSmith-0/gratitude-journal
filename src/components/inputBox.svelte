<script lang="ts">
    export let name:string;
    export let type:string;
</script>
<section id="container">
    <input type={type}>
    <p id="placeholder">{name}</p>
</section>

<style>
    input {
        border-radius: var(--radius);
        outline: none;
        border: 2px solid black;
        font-family: var(--accent-font);
        height: 55px;
        padding: 5px;
    }
    #container {
        position: relative;
    }
    #placeholder {
        position: absolute;
        top: 5px;
        left: 5px;
        font-weight: 400;
        font-family: var(--accent-font);
        font-size: var(--font-normal);
        color: #666;
        transition: all 0.1s ease-in-out 0s;
    }
    input:focus {
        border: 2px solid var(--blue);
    }
    input:focus ~ p#placeholder {
        color: var(--blue);
        font-size: var(--font-x-small);
        transform: translateY(-5px);
    }
</style>
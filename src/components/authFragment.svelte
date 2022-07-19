<script lang="ts">
    import InputBox from './inputBox.svelte';
    export let name:string;
</script>
<button>
    {name} with google
</button>
<section>
    <span class="line"></span>
    <p>or</p>
    <span class="line"></span>
</section>
<InputBox name="Email" type="text"/>
<InputBox name="Password" type="password"/>

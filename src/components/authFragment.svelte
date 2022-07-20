<script lang="ts">
    import InputBox from './inputBox.svelte';
    export let name:string;
</script>
{#if name == "Sign up"}
<a href="/login">Have an account already? Login</a>
{:else}
<a href="/sign-up">Don't have an account? Sign up</a>
{/if}
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

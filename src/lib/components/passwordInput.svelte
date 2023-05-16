<script>
    import IconButton from '@smui/icon-button';
    import CustomInput from './customInput.svelte';
    
    export let label = "Password";
    export let name = "password";
    
    let showPassword = false;

    const changeVisibility = () => showPassword = !showPassword;
</script>

<CustomInput label={label} name={name} type={showPassword ? "text" : "password"}>
    <IconButton class="material-icons" type="button" on:click={changeVisibility} slot="trailingIcon">{showPassword ? "visibility_off" : "visibility"}</IconButton>
</CustomInput>
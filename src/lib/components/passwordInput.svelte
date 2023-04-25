<script>
    import IconButton from '@smui/icon-button';
    import CustomInput from './customInput.svelte';
    
    let showPassword = false;

    const changeVisibility = () => showPassword = !showPassword;
</script>

<CustomInput label="Password" name="password" type={showPassword ? "text" : "password"}>
    <IconButton class="material-icons" type="button" on:click={changeVisibility} slot="trailingIcon">{showPassword ? "visibility_off" : "visibility"}</IconButton>
</CustomInput>
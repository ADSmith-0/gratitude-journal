<script>
    import InputBox from "./inputBox.svelte";
</script>
<InputBox 
    id="email"
    placeholder="Email"
    type="text"
    passValueBack={updateField}
    validateAs="email"
    errorVisible={errorsVisible}
/>
<InputBox
    id="password"
    placeholder="Password"
    type="password"
    passValueBack={updateField}
    errorVisible={errorsVisible}
/>

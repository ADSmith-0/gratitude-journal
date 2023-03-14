<script>
    import Popup from "./popup.svelte";
    import InputBox from "./inputBox.svelte";

    const fields = {
        "newEmail": "",
        "newEmailRepeat": ""
    }

    let errorsVisible = false;
    let newEmailRepeat;

    const updateField = (id, newValue) => fields[id] = newValue;
    
</script>
<Popup>
    <span slot="title">Please enter your new email</span>
    <span slot="inputs">
        <InputBox 
            id="newEmail"
            placeholder="Email"
            type="text"
            passValueBack={updateField}
            validateAs="email"
            errorVisible={errorsVisible}
        />
        <InputBox 
            id="newEmailRepeat"
            placeholder="Email"
            type="text"
            passValueBack={updateField}
            validateAs="email"
            errorVisible={errorsVisible}
            bind:this={newEmailRepeat}
        />
    </span>
</Popup>
<style>

</style>
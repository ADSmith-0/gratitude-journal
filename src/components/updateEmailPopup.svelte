<script>
    import Popup from "./popup.svelte";
    import InputBox from "./inputBox.svelte";
	import { enhance } from "$app/forms";

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
        <form method="post" action="?/changeEmail" use:enhance={({ data, cancel }) => {
            

            // if the app is offline then cancel the submission as it will error out
            if(!navigator.onLine){
                cancel();
            }
        }}>
            <InputBox 
                id="newEmail"
                placeholder="New Email"
                type="text"
                passValueBack={updateField}
                validateAs="email"
                errorVisible={errorsVisible}
            />
            <InputBox 
                id="newEmailConfirm"
                placeholder="Confirm New Email"
                type="text"
                passValueBack={updateField}
                validateAs="email"
                errorVisible={errorsVisible}
                bind:this={newEmailRepeat}
            />
            <button class="button bg-green">Submit</button>
        </form>
    </span>
</Popup>
<style>
    form {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        gap: 1em;
    }
    span[slot="title"] {
        font-size: var(--font-small);
        display: inline-block;
        font-family: var(--accent-font);
        padding: 0.5em 0 0 1em;
    }
</style>
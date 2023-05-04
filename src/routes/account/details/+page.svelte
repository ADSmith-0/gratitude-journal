<script>
	import { deleteSelf } from "$lib/db/db-firebase";
    import ReauthUserPopup from "$lib/components/reauthUserPopup.svelte";
	import UpdateEmailPopup from "$lib/components/updateEmailPopup.svelte";

    let reauth = false;
    let blockedAction = "";

    const setReauth = newReauth => reauth = newReauth;

    const deleteAccount = () => {
        deleteSelf(logout)
        .catch(error => {
            if(error.includes("requires recent login")){
                blockedAction = "deleteAccount";
                reauth = true;
            }
        })
    }

    const tryActionAgain = userCredentials => {
        console.log(blockedAction);
        blockedAction();
    }
</script>
<!-- <UpdateEmailPopup /> -->
{#if reauth}
    <ReauthUserPopup setReauth={setReauth} onSuccessfulReauth={tryActionAgain}/>
{/if}
<section class="wrapper">
    <section class="card">
        <p>Account details</p>
        <div class="detail">
            <p>Joined</p>
            <p>20th Dec 2020</p>
        </div>
        <div class="detail">
            <p>Entries</p>
            <p>59</p>
        </div>
        <div class="detail">
            <p>Email</p>
            <p class="email-address">adam00199382818@gmail.com</p>
        </div>
    </section>
    <button class="button small card">Change Email</button>
    <button class="button small card">Change password</button>
    <a id="logout" class="button small card" href="/logout">Logout</a>
    <button id="delete-btn" class="button small card">Delete Account</button>
</section>
<style>
    .wrapper {
        display: flex;
        flex-direction: column;
        gap: 1em;
        align-items: stretch;
        font-size: var(--font-size-default);
        background: var(--grey);
        box-sizing: border-box;
        padding: 2em;
    }
    .email-address {
        overflow-wrap: break-word;
    }
    .wrapper section,
    .wrapper > button,
    .wrapper > a {
        padding: 0.9em 1.5em;
        font-size: var(--font-x-small);
    }
    .wrapper section {
        font-size: var(--font-x-small);
    }
    .wrapper section p {
        font-size: var(--font-size-default);
        font-family: var(--accent-font);
    }
    .wrapper section > p {
        font-size: var(--font-x-small);
        margin-bottom: 1em;
    }
    .detail p:first-child{
        color: var(--darker-grey);
    }
    .detail p:last-child{
        margin-bottom: 1em;
    }
    #delete-btn {
        color: var(--red);
    }
</style>
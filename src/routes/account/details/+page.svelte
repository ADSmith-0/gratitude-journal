<script>
	import { goto } from "$app/navigation";


    const logout = () => {
        localStorage.removeItem("accessToken");
        goto("/account");
    }
</script>
<div class="wrapper">
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
    <button class="button-small card">Change Email</button>
    <button class="button-small card">Change password</button>
    <button id="logout" class="button-small card" on:click={logout}>Logout</button>
    <button id="delete-btn" class="button-small card">Delete Account</button>
</div>
<style>
    .wrapper {
        display: flex;
        flex-direction: column;
        gap: 1em;
        align-items: stretch;
        font-size: var(--font-size-default);
        background: var(--grey);
        padding: 2em;
        box-sizing: border-box;
    }
    .email-address {
        overflow-wrap: break-word;
    }
    .wrapper section,
    .wrapper > button {
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
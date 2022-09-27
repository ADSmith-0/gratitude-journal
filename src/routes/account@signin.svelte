<div class="wrapper">
    <section>
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
            <p>adam00199382818@gmail.com</p>
        </div>
    </section>
    <button class="button-small">Change Email</button>
    <button class="button-small">Change password</button>
    <button id="logout" class="button-small">Logout</button>
    <button id="delete-btn" class="button-small">Delete Account</button>
</div>
<style>
    .wrapper {
        display: flex;
        flex-direction: column;
        align-items: stretch;
        overflow-y: scroll;
    }
    .wrapper section,
    .wrapper > button {
        padding: 0.9em 1.5em;
        border: 0 solid var(--black-translucent);
        border-bottom-width: 0.01em;
        border-radius: 0;
        background-color: #fff;
        font-size: var(--font-small);
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
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
    <a class="button small card" href="details/change-password">Change password</a>
    <a class="button small card" href="/user/logout">Logout</a>
    <a class="button small card txt-red" href="/user/delete-account">Delete Account</a>
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
</style>
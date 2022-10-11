<script>
    let theme = "";
    let emailNotifications = false;
    let phoneNotifications = false;
</script>
<div class="wrapper">
    <section id="theme" class="card">
        <p>Theme</p>
        <select bind:value={theme}>
            <option value="light">Light theme</option>
            <option value="dark">Dark theme</option>
        </select>
    </section>
    <section id="notifications" class="card">
        <p>Notifications</p>
        <label>
            <input type="checkbox" bind:checked={emailNotifications}>
            Email reminders
        </label>
        {#if emailNotifications }
            <input type="text" placeholder="time">
        {/if}
        <label>
            <input type="checkbox" bind:checked={phoneNotifications}>
            Phone notifications
        </label>
    </section>
</div>
<style>
    .wrapper {
        display: flex;
        flex-direction: column;
        padding-top: 1em;
        gap: 1em;
        align-items: stretch;
        width: 80vw;
        margin: auto;
    }
    section * {
        font-family: var(--accent-font);
    }
    section p {
        font-size: var(--font-small);
        border: 0 solid var(--grey);
        border-bottom-width: 0.1em;
    }
    #theme option {
        font-family: var(--accent-font);
    }
    #notifications {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        gap: 0.5em;
    }
    #notifications p:first-child {
        margin-bottom: 0.5em;
    }
</style>
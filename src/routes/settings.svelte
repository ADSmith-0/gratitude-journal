<script>
    let theme = "";
    let emailNotifications = false;
    let phoneNotifications = false;
</script>
<div class="wrapper">
    <section id="theme">
        <p>Theme</p>
        <select bind:value={theme}>
            <option value="light">Light theme</option>
            <option value="dark">Dark theme</option>
        </select>
    </section>
    <section id="notifications">
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
        align-items: stretch;
    }
    section {
        border: 0 solid var(--black-translucent);
        padding: 1em;
        border-bottom-width: 0.05em;
    }
    section * {
        font-family: var(--accent-font);
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
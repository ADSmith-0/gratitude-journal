<script>
    import NotificationComponent from '../components/notificationComponent.svelte';
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
        <NotificationComponent label="Email notification"/>
        <NotificationComponent label="Phone notification"/>
    </section>
</div>
<style>
    .wrapper {
        display: flex;
        flex-direction: column;
        padding: 1em; 
        gap: 1em;
        align-items: stretch;
        margin: auto;
    }
    section * {
        font-family: var(--accent-font);
    }
    section p {
        font-size: var(--font-small);
        border: 0 solid var(--black-translucent);
        border-bottom-width: 0.05em;
        padding-bottom: 0.5em;
        margin-bottom: 0.5em;
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
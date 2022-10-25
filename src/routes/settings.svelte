<script>
    import NotificationComponent from '../components/notificationComponent.svelte';
    let theme = "light";
    let emailNotifications = false;
    let phoneNotifications = false;
</script>
<div class="wrapper">
    <section class="theme card">
        <p>Theme</p>
        <select bind:value={theme}>
            <option value="light">Light theme</option>
            <option value="dark">Dark theme</option>
        </select>
    </section>
    <section class="notifications card">
        <p class="card-header">Notifications</p>
        <NotificationComponent label="Email notification"/>
        <NotificationComponent label="Phone notification"/>
    </section>
    <button class="delete-data button">Delete all local data</button>
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
    .card-header {
        font-size: var(--font-normal);
        border: 0 solid var(--black-translucent);
        border-bottom-width: 0.05em;
        padding-bottom: 0.5em;
    }
    .theme p {
        font-size: var(--font-normal);
        margin-bottom: 1em;
    }
    .theme option {
        font-family: var(--accent-font);
    }
    .theme select {
        font-size: var(--font-x-small);
    }
    .notifications {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        gap: 1em;
        padding-bottom: 1.5em;
    }
    .delete-data {
        color: var(--red);
        background-color: #fff;
        box-shadow: var(--box-shadow);
        padding: 0.9em;
        border-radius: var(--radius-less);
        font-size: var(--font-x-small);
    }
</style>
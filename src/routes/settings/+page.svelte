<script>
	import NotificationComponent from '../../components/notificationComponent.svelte';
    let emailNotifications = false;
    let phoneNotifications = false;
</script>
<div class="wrapper">
    <section class="notifications card">
        <p class="card-header">Notifications</p>
        <NotificationComponent key="email-notification" label="Email notification"/>
        <NotificationComponent key="phone-notification" label="Phone notification"/>
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
    .notifications {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        gap: 1em;
        padding-bottom: 1.5em;
    }
    .delete-data {
        color: var(--red);
        background-color: var(--background-color);
        box-shadow: var(--box-shadow);
        padding: 0.9em;
        border-radius: var(--radius-less);
        font-size: var(--font-x-small);
    }
</style>
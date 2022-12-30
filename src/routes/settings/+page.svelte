<script>
	import { changeTheme } from '../../helpers/util.svelte';
    import NotificationComponent from '../../components/notificationComponent.svelte';
    let theme = localStorage.getItem("theme") || "light";
    $: localStorage.setItem("theme", theme)
    $: theme && changeTheme();
    let emailNotifications = false;
    let phoneNotifications = false;
</script>
<div class="wrapper">
    <section class="theme card">
        <p class="card-header">Theme</p>
        <select bind:value={theme}>
            <option value="default">System default</option>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
        </select>
    </section>
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
    .theme p {
        font-size: var(--font-normal);
        margin-bottom: 1em;
    }
    .theme select, .theme option {
        font-size: var(--font-x-small);
        font-family: var(--accent-font);
        margin-bottom: 1em;
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
<script>
    export let label = "";
    import Checkbox from './checkbox.svelte';
    let notificationSelected = false;
    const passCheckedBack = checked => notificationSelected = checked;
    const hours = ["00", "01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23"];
    const minutes = ["00", "15", "30", "45"];
</script>
<Checkbox label={label} passCheckedBack={passCheckedBack}/>
{#if notificationSelected }
    <section>
        At time:
        <select>
            {#each hours as hour}
                <option value={hour}>{hour}</option>
            {/each}
        </select>
        :
        <select>
            {#each minutes as minute}
                <option value={minute}>{minute}</option>
            {/each}
        </select>
    </section>
{/if}
<style>
</style>
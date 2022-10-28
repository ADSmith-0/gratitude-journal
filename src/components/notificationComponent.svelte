<script>
    export let key = "";
    export let label = "";
    import Checkbox from './checkbox.svelte';
    let notificationSelected = (localStorage.getItem(key) === "true");
    const passCheckedBack = checked => notificationSelected = checked;
    const hours = ["00", "01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23"];
    const minutes = ["00", "15", "30", "45"];
    let hour = localStorage.getItem(key+"-hour") || "00";
    $: localStorage.setItem(key+"-hour", hour);
    let minute = localStorage.getItem(key+"-minute") || "00";
    $: localStorage.setItem(key+"-minute", minute);
</script>
<Checkbox key={key} label={label} passCheckedBack={passCheckedBack}/>
{#if notificationSelected}
    <section>
        At time  
        <select bind:value={hour}>
            {#each hours as hour}
                <option value={hour}>{hour}</option>
            {/each}
        </select>
        :
        <select bind:value={minute}>
            {#each minutes as minute}
                <option value={minute}>{minute}</option>
            {/each}
        </select>
    </section>
{/if}
<style>
</style>
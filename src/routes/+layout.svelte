<script>
    import Navbar from '../components/navbar.svelte';
    import { browser } from '$app/environment';
	import { changeTheme } from '../helpers/util.svelte';

    if(browser){
        changeTheme();
    }
</script>
<Navbar>
    <slot></slot>
</Navbar>
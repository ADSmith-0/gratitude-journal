<script context="module">
    import { browser } from "$app/environment";

    const modulo = (number, modulo) => (((number%modulo)+modulo)%modulo);

    const getDayStrFromNum = (num, format = "long") => {
        if(format === "long"){
            const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
            return days[num];
        }
    }

    // always run client side - if(browser)
    const getTheme = () => {
        if(browser && (localStorage.getItem("theme") == "dark" || !!window.matchMedia("(prefers-color-scheme: dark)")))
            return "dark";

        return "light";
    }

    // always run client side - if(browser)
    const changeTheme = () => {
        const body = document.querySelector("body");
        body.classList.remove("light");
        body.classList.remove("dark");
        body.classList.add(localStorage.getItem("theme"));
    }

    export { modulo, getDayStrFromNum, getTheme, changeTheme };
</script>
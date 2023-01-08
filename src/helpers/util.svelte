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
    const getThemeColour = () => {
        // ordered this way as light theme should override prefers-color-scheme
        if(browser && (localStorage.getItem("theme") == "dark"))
            return "dark";

        if(browser && (localStorage.getItem("theme") == "light"))
            return "light";

        if(browser && window.matchMedia("(prefers-color-scheme: dark)").matches)
            return "dark";

        if(browser && window.matchMedia("(prefers-color-scheme: light)").matches)
            return "light";

        console.error("cannot parse theme colour");
        return "light";
    }

    // always run client side - if(browser)
    const changeTheme = () => {
        const body = document.querySelector("body");
        body.classList.remove("light");
        body.classList.remove("dark");
        body.classList.add(localStorage.getItem("theme"));
    }

    export { modulo, getDayStrFromNum, getThemeColour, changeTheme };
</script>
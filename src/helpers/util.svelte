<script context="module">
    const modulo = (number, modulo) => (((number%modulo)+modulo)%modulo);

    const getDayStrFromNum = (num, format = "long") => {
        if(format === "long"){
            const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
            return days[num];
        }
    }

    export { modulo, getDayStrFromNum };
</script>
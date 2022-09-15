<script context="module">
import { modulo } from "./util.svelte";

    // Month +1, because 0 makes it last day of last month 
    const getLastDateOfMonth = (month, year) => new Date(year, month+1, 0).getDate();
    const getFirstDayOfMonth = (month, year) => new Date(year, month, 1).getDay();
    /* 
        Date reference in js starts with Sunday = 0,
        but we start with Monday, so (-1 modulo 7)
        hacky workaround as % is remainder not modulo
        https://www.geeksforgeeks.org/how-to-get-negative-result-using-modulo-operator-in-javascript/
    */
    const gregorianFromDay = day => modulo(day-1, 7);
    const getDatesArray = (currentMonth, currentYear) => {
        const lastDate = getLastDateOfMonth(currentMonth, currentYear);
        const firstDay = gregorianFromDay(getFirstDayOfMonth(currentMonth, currentYear));

        const dates = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
        // add buffer if first day of month isn't monday
        for(let buffer = 0; buffer < firstDay; buffer++){
            dates.push("");
        }

        for(let date = 1; date <= lastDate; date++){
            dates.push(date);
        }

        while(dates.length % 7 !== 0){
            dates.push("");
        }

        return dates;
    }
    
    export { getDatesArray };
</script>
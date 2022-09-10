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
    const getDaysArray = (currentMonth, currentYear) => {
        const lastDate = getLastDateOfMonth(currentMonth, currentYear);
        const firstDay = gregorianFromDay(getFirstDayOfMonth(currentMonth, currentYear));

        const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
        // add buffer if first day of month isn't monday
        for(let buffer = 0; buffer < firstDay; buffer++){
            days.push("");
        }

        for(let date = 1; date <= lastDate; date++){
            days.push(date);
        }

        while(days.length % 7 !== 0){
            days.push("");
        }

        return days;
    }
    
    export { getDaysArray };
</script>
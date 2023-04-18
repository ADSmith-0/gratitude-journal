import { modulo } from "./util";

/**
 * Get the length of a month
 * (month +1) because 0 makes it last day of last month 
 * @param {Number} month 
 * @returns {Number} get the length of a month
 */
const getMonthLength = month => (new Date(2023, month+1, 0).getDate());

/**
 * Get the first day of a month, e.g. if a month starts on a Saturday it would return 6
 * @param {Number} month 
 * @param {Number} year 
 * @returns {Number} Day of the week (0-6)
 */
const getFirstDayOfMonth = (month, year) => new Date(year, month, 1).getDay();

/*
    Date reference in js starts with Sunday = 0, but we start with Monday, so (-1 modulo 7)
    hacky workaround as % is remainder not modulo
    https://www.geeksforgeeks.org/how-to-get-negative-result-using-modulo-operator-in-javascript/
 */
/**
 * Get the gregorian day (0 = Monday, 1 = Tuesday, etc.)
 * @param {Number} day 
 * @returns {Number} day (0-6)
 */
const gregorianFromDay = day => modulo(day-1, 7);

/**
 * Get the dates for a given month and year
 * @param {Number} currentMonth 
 * @param {Number} currentYear 
 * @returns {Array} Dates
 */
const getDatesArray = (currentMonth, currentYear) => {
    const lastDate = getMonthLength(currentMonth);
    const firstDay = gregorianFromDay(getFirstDayOfMonth(currentMonth, currentYear));

    const dates = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    
    // Pad the start if first day of month isn't monday
    for(let buffer = 0; buffer < firstDay; buffer++){
        dates.push("");
    }

    // Add the dates
    for(let date = 1; date <= lastDate; date++){
        dates.push(date);
    }

    // Pad the end to make it square
    while(dates.length % 7 !== 0){
        dates.push("");
    }

    return dates;
}

export { getDatesArray };

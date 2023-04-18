const getTodaysDate = () => (new Date().toLocaleDateString());

// ISO format for date, but one that ignores timezone offset,
// unlike toISOString()
const ISOFromDate = dateObj => {
    const year = dateObj.getFullYear();
    const month = (dateObj.getMonth() + 1).toString().padStart(2, '0'); // +1 because it indexes at 0
    const date = (dateObj.getDate()).toString().padStart(2, '0');
    const ISODate = `${year}-${month}-${date}`;
    return ISODate;
}

const dateFromISO = ISOString => (new Date(ISOString));

// a & b: Date object ({date, content}) to be sorted
const sortDateAsc = (a,b) => b.date < a.date;

// a & b: Date object ({date, content}) to be sorted
const sortDateDesc = (a,b) => a.date < b.date;

/**
 * Function to return a number modulo another number, so
 * 5 modulo 3 = 2
 * @param {Number} number 
 * @param {Number} modulo 
 * @returns The number modulo the modulo provided
 */
const modulo = (number, modulo) => (((number % modulo) + modulo) % modulo);

/**
 * Function to return a day from a number
 * @param {Number} num 
 * @param {String} format the format of the string for the day returned
 * @returns {String} Day
 */
const getDayFromNum = (num, format = "long") => {
    if (format === "long") {
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
        return days[num];
    }
}

export { getTodaysDate, ISOFromDate, dateFromISO, sortDateAsc, sortDateDesc, modulo, getDayFromNum }
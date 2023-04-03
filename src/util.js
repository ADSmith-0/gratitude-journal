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

export { getTodaysDate, ISOFromDate, dateFromISO, sortDateAsc, sortDateDesc }
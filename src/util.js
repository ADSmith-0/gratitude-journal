const ISOFromDate = date => date.toISOString().split("T")[0];

const dateFromISO = ISOString => (new Date(ISOString));

// a & b: Date object ({date, content}) to be sorted
const sortDateAsc = (a,b) => b.date < a.date;

// a & b: Date object ({date, content}) to be sorted
const sortDateDesc = (a,b) => a.date < b.date;

export { ISOFromDate, dateFromISO, sortDateAsc, sortDateDesc }
const ISOFromDate = date => date.toISOString().split("T")[0];

const dateFromISO = ISOString => (new Date(ISOString));

export { ISOFromDate, dateFromISO }
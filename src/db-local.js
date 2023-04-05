import { db } from "./dexieInit";

const request = request => {
    // eslint-disable-next-line no-useless-catch
    try {
        request
    }catch(e){
        throw e;
    }
}

/**
 * Function get a record by date from dexie
 * @param {ISOString} date
 * @returns {Promise} with record
 */
const getEntry = date => request(db.entries.get(date));

/**
 * Function to get all records from dexie
 * @returns {Promise} all records
 */
const getEntries = () => request(db.entries.toArray());

/**
 * Function to add a record to dexie
 * @param {ISOString} date 
 * @param {string} content
 * @param {DateString} lastModified
 * @returns {Promise}
 */
const addEntry = (date, content, lastModified = ((new Date).toString())) => (
    request(
        db.entries.add({
            date,
            content,
            lastModified
        })
    )
);

/**
 * Function to update the content of an entry
 * @param {ISOString} date 
 * @param {string} content 
 * @returns {Promise}
 */
const updateEntryContent = (date, content) => (
    request(
        db.entries.update(date, {
            content,
        })
    )
);

/**
 * Function for hard deletion of an entry from dexie
 * @param {ISOString} date 
 * @returns {Promise}
 */
const deleteEntry = date => request(db.entries.delete(date));

/**
 * Function to return all entries that contains a search term
 * @param {string} searchTerm 
 * @returns {Promise}
 */
const findEntries = searchTerm => request(db.entries.filter(({ content }) => content.includes(searchTerm)));

export { 
    getEntry,
    getEntries,
    addEntry,
    updateEntryContent,
    deleteEntry,
    findEntries
}
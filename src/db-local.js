import { db } from "./dexieInit";

const makeRequest = request => (
    new Promise((resolve, reject) => {
        try {
            const response = request();
            resolve(response);
        } catch (error) {
            reject(error);
        }
    })
)

/**
 * Function get a record by date from dexie
 * @param {ISOString} date
 * @returns {Promise} with record
 */
const getEntry = date => (
    makeRequest(db.entries.get(date))
)

/**
 * Function to get all records from dexie
 * @returns {Promise} all records
 */
const getEntries = () => (
    makeRequest(db.entries.toArray())
)

/**
 * Function to add a record to dexie
 * @param {ISOString} date 
 * @param {string} content 
 * @param {boolean} isDeleted 
 * @returns {Promise}
 */
const addEntry = (date, content, isDeleted = false) => (
    makeRequest(
        db.entries.add({
            date,
            content,
            isDeleted
        })
    )
)

/**
 * Function to update the content of an entry
 * @param {ISOString} date 
 * @param {string} content 
 * @returns {Promise}
 */
const updateEntryContent = (date, content) => (
    makeRequest(
        db.entries.update(date, {
            content,
        })
    )
)

/**
 * Function for hard deletion of an entry from dexie
 * @param {ISOString} date 
 * @returns {Promise}
 */
const deleteEntry = date => (
    makeRequest(db.entries.delete(date))
)

/**
 * Function to return all entries that contains a search term
 * @param {string} searchTerm 
 * @returns {Promise}
 */
const findEntries = searchTerm => (
    makeRequest(db.entries.filter(({ content })=> content.includes(searchTerm)))
)

export { 
    getEntry,
    getEntries,
    addEntry,
    updateEntryContent,
    deleteEntry,
    findEntries
}
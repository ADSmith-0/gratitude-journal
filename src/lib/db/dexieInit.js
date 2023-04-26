import Dexie from 'dexie';

export const db = new Dexie("GratitudeJournal");
db.version(1).stores({
    entries: "&date, content, lastModified"
});
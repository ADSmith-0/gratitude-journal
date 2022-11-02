import Dexie from 'dexie';

export const db = new Dexie("GratitudeJournal");
db.version(3).stores({
    entries: "date, content"
});

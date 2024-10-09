import { AsyncDatabase } from "promised-sqlite3";

export const getDb = async (path) => {
    try {
        const db = await AsyncDatabase.open(path);
        // db.inner.on('trace', sql => console.log('[TRACING SQL]', sql));
        return db;
    } catch(err) {
        console.log('[GETTING DB ERROR]', err);
        return;
    }

};
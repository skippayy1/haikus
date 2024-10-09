'use server';
import { getDb } from "../_config/db";
import { ENV } from "../_config/env";

export const deleteComment = async (commentId) => {
    const db = await getDb(ENV.dbPath);
    await db.run(`
        DELETE FROM commentaires WHERE id = ?
    `, commentId);
};
'use server'
import { ENV } from "../_config/env";
import { getDb } from '../_config/db';

export const getAllHaikus = async () => {
    const db = await getDb(ENV.dbPath);
    console.log(db)
    let results = await db.all(`
        SELECT id, text, icon_index, auteur FROM haikus
    `);

    results = results.map(({ id, text, icon_index, auteur }) => ({
        id,
        text,
        icon_index,
        auteur
    }));
    return results;
};

export const addHaiku = async ({text, icon_index, auteur}) => {
    const db = await getDb(ENV.dbPath);
    await db.run(`
        INSERT INTO haikus (text, icon_index, auteur) VALUES (?, ?, ?)
    `, text, icon_index, auteur);
};

export const getHaiku = async (id) => {
    const db = await getDb(ENV.dbPath);
    const result = await db.get(`
        SELECT id, text, icon_index, auteur FROM haikus WHERE id = ?
    `, id);

    return result;
};

export const getComments = async (haikuId) => {
    const db = await getDb(ENV.dbPath);
    let results = await db.all(`
        SELECT id, auteur, text FROM commentaires WHERE haiku_id = ?
    `, haikuId);

    results = results.map(({ id, auteur, text }) => ({
        id,
        auteur,
        text
    }));
    return results;
};

export const addComment = async ({ haiku_id, auteur, text }) => {
    const db = await getDb(ENV.dbPath);
    await db.run(`
        INSERT INTO commentaires (haiku_id, auteur, text) VALUES (?, ?, ?)
    `, haiku_id, auteur, text);
};



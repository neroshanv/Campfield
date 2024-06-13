import sql from 'better-splite3';

const db = sql('meals.db');

export async function getMeals() {
    await new Promise((resolve) => setTimeout(resolve, 5000));

    throw new Error('Loading meals failed');
    return db.prepare('SELECT * FROM meals').all();
}

export function getMeals(slug) {

    return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
}
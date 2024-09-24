

import { db, Clients } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
	
	await db.insert(Clients).values([
		{ id: 1, name: "Jose Luis", age: 56, isActive: true },
		{ id: 2, name: "Beatriz", age: 47, isActive: true },
		{ id: 3, name: "Sarai", age: 32, isActive: true },
		{ id: 4, name: "Jose Miguel", age: 13, isActive: true },
		{ id: 5, name: "Bety", age: 1, isActive: false },
	]);

	console.log('Seed Executed');
}

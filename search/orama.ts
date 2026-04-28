import { create, insertMultiple, type Orama } from '@orama/orama';
import { loadTickets } from './loadTickets.js';

export type Ticket = {
            task_id: 'string',
            title: 'string',
            description: 'string',
            module: 'string',
            tcode: 'string[]',
            program: 'string[]',
            symptom: 'string',
            root_cause: 'string',
            fix: 'string',
            keywords: 'string[]',
            created_at: 'string',
        };

export async function setupDB(): Promise<Orama<Ticket>> {
    const db = await create({
        schema: {
            task_id: 'string',
            title: 'string',
            description: 'string',
            module: 'string',
            tcode: 'string[]',
            program: 'string[]',
            symptom: 'string',
            root_cause: 'string',
            fix: 'string',
            keywords: 'string[]',
            created_at: 'string',
        }
});

const tickets = loadTickets();

await insertMultiple(db, tickets);

console.log('Database setup complete with tickets:', tickets.length);
    return db;
}
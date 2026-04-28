import { search, type Orama } from '@orama/orama';
import { Ticket } from './orama.js';

export async function searchTickets(db: Orama<Ticket>, query: string) {
    const results = await search(db, {
        term: query,
        properties: ['title', 'description', 'symptom', 'root_cause', 'fix', 'keywords'],
        boost: {
            title: 3,
            description: 2,
            symptom: 2,
            root_cause: 1.5,
            fix: 1.5,
            keywords: 2,
        },
    });
    return results.hits;
}
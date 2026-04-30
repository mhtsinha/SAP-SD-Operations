import { search, type Orama } from '@orama/orama';
import { Ticket } from './orama.js';

export async function searchTickets(db: Orama<Ticket>, query: string) {
    const results = await search(db, {
        term: query,
        properties: ['title', 'description', 'symptom', 'root_cause', 'fix', 'keywords', 'program', 'tcode'],
        boost: {
            title: 3,
            description: 2.5,
            symptom: 2.5,
            root_cause: 2,
            fix: 1.5,
            keywords: 2.5,
            program: 2,
            tcode: 1.5,
        },
    });
    return results.hits;
}
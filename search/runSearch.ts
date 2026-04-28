import { setupDB } from './orama.js';
import { searchTickets } from './search.js';

const query = process.argv[2] || "invoice error";

if(!query) {
    console.error("Please provide a search query as a command-line argument.");
    process.exit(1);
}

(async () => {
    try {
        const db = await setupDB();
        const results = await searchTickets(db, query);
        console.log(`Search results for "${query}":`, results);
    } catch (error) {
        console.error("Error running search:", error);
    }
})();
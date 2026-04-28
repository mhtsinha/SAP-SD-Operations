import fs from "fs";
import path from "path";

const ticketsDir = path.join(process.cwd(), "tickets");

export function loadTickets() {
    const ticketFiles = fs.readdirSync(ticketsDir);
    const jsonFiles = ticketFiles.filter((file) => path.extname(file).toLowerCase() === ".json");
    const tickets = jsonFiles.map((file) => {
        const ticketPath = path.join(ticketsDir, file);
        const ticketData = fs.readFileSync(ticketPath, "utf-8");
        try{             
            return JSON.parse(ticketData);}
        catch (error) {
            console.error(`Error parsing JSON from ${file}:`, error);
            return null;
        }
    }).filter((ticket) => ticket !== null);
    return tickets;
}
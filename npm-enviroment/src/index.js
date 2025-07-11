import connectToDatabase from "./database/data.js";

async function main() {
    await connectToDatabase(process.env.USER, process.env.PASSWORD)
}

main();
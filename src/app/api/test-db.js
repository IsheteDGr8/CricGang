import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
    try {
        const client = await clientPromise;
        const db = client.db("test"); // Change "test" to your database name

        const collection = await db.listCollections().toArray();

        res.status(200).json({ 
            message: "Connected to MongoDB successfully",
            collections: collection.map(col => col.name)
        });
    } catch (error) {
        res.status(500).json({ message: "Failed to connect to MongoDB", error: error.message });
    }
}
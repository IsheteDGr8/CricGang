import clientPromise from "@/lib/mongodb";

export async function GET() {
    try {
        const client = await clientPromise;
        const db = client.db("test"); // Change "test" to your database name

        const collections = await db.listCollections().toArray();

        return Response.json({
            message: "Connected to MongoDB successfully",
            collections: collections.map(col => col.name)
        });
    } catch (error) {
        return Response.json({ 
            message: "Failed to connect to MongoDB", 
            error: error.message 
        }, { status: 500 });
    }
}


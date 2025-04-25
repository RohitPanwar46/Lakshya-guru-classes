import { MongoClient } from 'mongodb';

export async function POST(request) {
  const { name, email, phone, message } = await request.json();

  // Validate required fields
  if (!name || !message) {
    return new Response(JSON.stringify({ message: 'Missing required fields' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  try {
    const client = await MongoClient.connect(process.env.MONGODB_URI);
    const db = client.db();
    
    await db.collection('contacts').insertOne({
      name,
      email,
      phone: phone || null,
      message,
      createdAt: new Date()
    });

    client.close();
    
    return new Response(JSON.stringify({ message: 'Message stored successfully!' }), {
      status: 201,
      headers: { 'Content-Type': 'application/json' }
    });
    
  } catch (error) {
    console.error('Database error:', error);
    return new Response(JSON.stringify({ message: 'Failed to store message' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
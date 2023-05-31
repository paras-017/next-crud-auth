import Note from "@models/note";
import { connectToDB } from "@utils/database";

export async function GET(request, {params}) {
  try {
    await connectToDB()
    const notes = await Note.find({creator:params.id}).populate('creator')
    return new Response(JSON.stringify(notes), { status: 200 })
} catch (error) {
    return new Response('Failed to fetch Prompts created by user', { status: 200 })
  }
}
export async function POST(request){
  console.log('hello world')
    const { creator, title, description } = await request.json();

    try {
        await connectToDB();
        const newNote = await Note.create({ creator, title, description });

        return new Response(JSON.stringify(newNote), { status: 201 })
    } catch (error) {
        return new Response("Failed to create a new Note", { status: 500 });
    }
}

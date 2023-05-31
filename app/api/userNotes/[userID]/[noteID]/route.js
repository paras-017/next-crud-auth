import Note from "@models/note"
import { connectToDB } from "@utils/database"

export async function GET(request, {params}) {
    try {
      await connectToDB()
      const notes = await Note.find({_id:params.noteID})
      return new Response(JSON.stringify(notes), { status: 200 })
  } catch (error) {
    console.log(error)
      return new Response('Failed to fetch Prompts created by user', { status: 200 })
    }
  }

  export const PATCH = async (request, { params }) => {
    const { title, description } = await request.json();
    try {
        await connectToDB();
        // Find the existing prompt by ID
        const existingNote = await Note.find({_id:params.noteID});
        if (!existingNote) {
            return new Response("Note not found", { status: 404 });
        }
        // Update the prompt with new data
        await Note.findOneAndUpdate({_id:params.noteID}, {title,description})
        return new Response("Successfully updated the Note", { status: 200 });
    } catch (error) {
      console.log(error)
        return new Response("Error Updating Note", { status: 500 });
    }
};

export const DELETE = async (request, { params }) => {
  try {
      await connectToDB();

      // Find the prompt by ID and remove it
      await Note.findByIdAndRemove({_id:params.noteID});

      return new Response("Note deleted successfully", { status: 200 });
  } catch (error) {
      return new Response("Error deleting Note", { status: 500 });
  }
};

import { Schema, model, models } from 'mongoose';

const NoteSchema = new Schema({
  creator:{
   type:Schema.Types.ObjectId,
   ref:'User'
  },
  title: {
    type: String,
    required: [true, 'title is required!'],
  },
  description: {
    type: String,
    required: [true, 'description is required!'],
  }
});

const Note = models.Note || model("Note", NoteSchema);

export default Note;
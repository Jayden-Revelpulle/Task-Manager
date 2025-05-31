import mongoose, { Schema, Document } from 'mongoose';

interface ITask extends Document {
    name: string;
    completed: boolean;
}

const TaskSchema = new Schema<ITask>({
    name: {
        type: String,
        required: [true, 'must provide name'],
        trim: true,
        maxlength: [20, 'name cannot be longer than 20 characters']
    },
    completed: {
        type: Boolean,
        default: false,
    }
});

export default mongoose.model<ITask>('Task', TaskSchema); 
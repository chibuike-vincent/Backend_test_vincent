import mongoose, { Schema } from 'mongoose';

/**
 * Todo Schema
 * */
const TodoSchema = new Schema(
    {
        label: {
            type: String,
            required:true
        },
        completed: {
            type: Boolean,
            default:false,
        },
    },
    {
        autoCreate: true,
        timestamps: true,
        toJSON: { virtuals: true },
    },
);

export const TodoModel = mongoose.model('Todo', TodoSchema);



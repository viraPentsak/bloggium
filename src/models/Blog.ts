import mongoose from "mongoose";

export interface I_Blog extends mongoose.Document {
    id: string;
    title: string;
    description: string;
    slug: string;
    followers: number;
    author: string;
    createdAt: Date;
    updatedAt: Date;
    keyWords: string[]
}

//TODO: generate the slug or maybe allow users to create them? sell the custom slug, lol

const BlogSchema = new mongoose.Schema<I_Blog>({
    id: {},
    title: {
        type: String,
        required: [true, "Please enter the name for your blog"],
        maxlength: [150, "Title cannot be longer than 150 characters"]
    },
    description: {
        type: String,
        required: [true, "Please provide a short description for your blog"],
        maxlength: [10, "Hey! Just a few words. Okay? 10 characters are not that many)"]
    },
    slug: {
        type: String,
    },
    followers: {
        type: Number
    },
    author: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date
    },
    keyWords: {
        type: [String]
    }
}, {
    timestamps: true
});

const User = mongoose.models.Blog || mongoose.model<I_Blog>("Blog", BlogSchema);

export default User;
import mongoose from "mongoose";

const schema = mongoose.Schema;

// schema
const moviesSchema = new schema({
    movieName: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    cast: [{
        type: String,
        required: true
    }],
    genre: {
        type: String,
        required: true
    },
    releaseDate: {
        type: Date,
        required: true
    }
})

// model
export const moviesdata = mongoose.model("moviesdata", moviesSchema);
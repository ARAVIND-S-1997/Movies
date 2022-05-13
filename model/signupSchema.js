import mongoose from "mongoose";

const schema = mongoose.Schema;

const signupSchema = new schema({
    name: {
        type: String,
        required: true
    },
    dob: {
        type: String,
        required: true
    },
    emailid: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

export const users = mongoose.model("users", signupSchema);
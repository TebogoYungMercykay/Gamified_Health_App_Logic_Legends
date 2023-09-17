import mongoose from "mongoose";

const Userschema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 3,
        max: 20,
        unique: true
    },
    // surname: {
    //     type: String,
    //     required: true,
    //     min: 3,
    //     max: 20,
    //     unique: true
    // },
    email: {
        type: String,
        required: true,
        max: 50,
        lowercase: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        min: 8
    },
    profile_picture: {
        type: String,
        default: ""
    }
}, {timestamps: true});

const userModel = mongoose.model("user", Userschema);
export default userModel;


import mongoose, { model, Schema } from "mongoose";
const userSchema = new Schema({
    userName: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },
    confirmEmail: {
        type:Boolean,
        default:false
    },
    isDeleted: {
        type:Boolean,
        default:false
    },
    password: {
        type: String,
        required: true
    },

    phone: {
        type: Number,
        required:true
    },
    status:{
        type:String,
        default:"offline",
        enum:["offline","online","block"]
    },
    role:{
        type:String,
        default:"User",
        enum:["User","admin"]
    }

   
}, {
    timestamps: true
})

const userModel = mongoose.models.User || model('User', userSchema);
export default userModel
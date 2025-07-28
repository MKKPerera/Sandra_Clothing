import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        userId: {
            type: String,
            required: true,
            unique: true,
        },
        fullName: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
        password: {
            type: String,
            required: true,
            minlength: 6,
        },
        userType: {
            type: String,
            enum: ["user", "admin"],
            required: true,
            default: "user",
        },
    },
    { timestamps: true }
);

export default mongoose.model("User", userSchema);

import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    sizes: [{ type: String }],
    type: { type: String, required: true },
    images: [{ type: String }],
    colors: [{ type: String }],
    details: { type: String },
    description: {
        fabric: String,
        model: String,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
}, { timestamps: true });

export default mongoose.model("Product", productSchema);

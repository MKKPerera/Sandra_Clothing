import Product from "../models/ProductSchema.js";

export const addProduct = async (req, res) => {
    try {
        const {
            name,
            price,
            sizes,
            type,
            images,
            colors,
            details,
            description,
        } = req.body;

        const newProduct = new Product({
            name,
            price,
            sizes,
            type,
            images,
            colors,
            details,
            description,
            createdBy: req.user._id, // from verifyAdmin middleware
        });

        await newProduct.save();

        res.status(201).json({ message: "Product added successfully", product: newProduct });
    } catch (err) {
        res.status(500).json({ message: "Failed to add product", error: err.message });
    }
};

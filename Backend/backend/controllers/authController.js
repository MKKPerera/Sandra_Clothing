import User from "../models/UserSchema.js";
import bcrypt from "bcryptjs";
import { v4 as uuidv4 } from "uuid";

export const registerUser = async (req, res) => {
    const { fullName, email, password, userType } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ message: "Email already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const userId = uuidv4();

        const newUser = new User({
            userId,
            fullName,
            email,
            password: hashedPassword,
            userType,
        });

        try {
            await newUser.save();
        } catch (saveErr) {
            console.error("Save error:", saveErr);
            return res.status(500).json({ message: "Failed to save user", error: saveErr.message });
        }

        res.status(201).json({
            message: `${userType === "admin" ? "Admin" : "User"} registered successfully!`,
            user: {
                id: newUser.userId,
                email: newUser.email,
                userType: newUser.userType,
            },
        });
    } catch (err) {
        console.error("Register error:", err);
        res.status(500).json({ message: "Server error", error: err.message });
    }
};

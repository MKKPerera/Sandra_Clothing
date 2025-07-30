import User from "../models/UserSchema.js";

export const verifyAdmin = async (req, res, next) => {
    const userId = req.headers["x-user-id"];

    if (!userId) {
        return res.status(401).json({ message: "No user ID provided" });
    }

    try {
        const user = await User.findOne({ userId });

        if (!user || user.userType !== "admin") {
            return res.status(403).json({ message: "Access denied. Admins only." });
        }

        req.user = user;
        next();
    } catch (err) {
        res.status(500).json({ message: "Server error", error: err.message });
    }
};

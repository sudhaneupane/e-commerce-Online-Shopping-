import jwt from "jsonwebtoken";

export const adminAuth = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    const token = authorization;

    if (!token) {
      return res.json({ success: false, message: "Not authorized" });
    }

    const decodeToken = jwt.verify(token, process.env.JWT_SECRET);
    if (decodeToken !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
      return res.json({ success: false, message: "Not authorized" });
    }

    next();
  } catch (error) {
    console.log("error:", error);
    res.json({ success: false, message: error.message });
  }
};

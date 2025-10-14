import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Author from "../models/Author.js";

// ✅ Đăng nhập
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await Author.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Email không tồn tại" });
    }

    // So sánh mật khẩu
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Mật khẩu sai" });
    }

    // Tạo JWT token
    const token = jwt.sign(
      { id: user._id, email: user.email },
      "secret123",   // ⚠️ nhớ để .env khi deploy
      { expiresIn: "1h" }
    );

    res.json({ message: "Đăng nhập thành công", token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

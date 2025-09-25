import express from "express";
import router from "./routers/index.js";

const app = express();

// Middleware để parse JSON từ body
app.use(express.json());

// Middleware log thời gian + URL
const logRequestTime = (req, res, next) => {
  console.log(`[${new Date().toLocaleTimeString()}] ${req.method} ${req.url}`);
  next();
};

app.use(logRequestTime);

// Gắn router chính
app.use("/", router);
// Nếu muốn version API thì thay: app.use("/api", router);

app.listen(3000, () => {
  console.log(`Server is running on port http://localhost:3000`);
});

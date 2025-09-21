import { Router } from "express";

const productRouter = Router();

const products = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Phone", price: 500 },
  { id: 3, name: "Tablet", price: 300 },
];

// GET /api/products
productRouter.get("/", (req, res) => {
  const { maxPrice } = req.query;
  if (maxPrice) {
    const filtered = products.filter((p) => p.price <= Number(maxPrice));
    return res.json(filtered);
  }
  res.json(products);
});

// GET /api/products/:id
productRouter.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  const product = products.find((p) => p.id === id);

  if (!product) {
    return res.status(404).json({
      error: "Không tìm thấy sản phẩm với ID này",
    });
  }

  res.json(product);
});

// GET /api/products/search?name=...
productRouter.get("/search", (req, res) => {
  const { name } = req.query;

  if (!name) {
    return res.status(400).json({ error: "Vui lòng nhập từ khóa name" });
  }

  const result = products.filter((p) =>
    p.name.toLowerCase().includes(name.toLowerCase())
  );

  res.json(result);
});

// GET /api/products/greet
productRouter.get("/greet", (req, res) => {
  res.send("product greet");
});

export default productRouter;

// Common Set
// Question 23: Warehouse Inventory System

// 1. Insert 5 product documents
db.products.insertMany([
  {
    product_id: 1,
    product_name: "Laptop",
    category: "Electronics",
    quantity_in_stock: 50,
    reorder_level: 20,
    supplier_name: "ABC Corp",
    last_restock_date: new Date("2025-01-10"),
    storage_location: "A1"
  },
  {
    product_id: 2,
    product_name: "Chair",
    category: "Furniture",
    quantity_in_stock: 10,
    reorder_level: 15,
    supplier_name: "XYZ Ltd",
    last_restock_date: new Date("2023-05-01"),
    storage_location: "B2"
  },
  {
    product_id: 3,
    product_name: "Mobile",
    category: "Electronics",
    quantity_in_stock: 5,
    reorder_level: 10,
    supplier_name: "ABC Corp",
    last_restock_date: new Date("2025-02-15"),
    storage_location: "A2"
  },
  {
    product_id: 4,
    product_name: "Table",
    category: "Furniture",
    quantity_in_stock: 0,
    reorder_level: 5,
    supplier_name: "ABC Corp",
    last_restock_date: new Date("2021-12-01"),
    storage_location: "B1"
  },
  {
    product_id: 5,
    product_name: "Shoes",
    category: "Fashion",
    quantity_in_stock: 30,
    reorder_level: 10,
    supplier_name: "PQR Traders",
    last_restock_date: new Date("2024-03-01"),
    storage_location: "C1"
  }
]);

// 2. Find products where quantity_in_stock < reorder_level
db.products.find({
  $expr: { $lt: ["$quantity_in_stock", "$reorder_level"] }
});

// 3. Increase quantity_in_stock by 100 for supplier "ABC Corp"
db.products.updateMany(
  { supplier_name: "ABC Corp" },
  { $inc: { quantity_in_stock: 100 } }
);

// 4. Delete products before 2022-01-01 AND quantity = 0
db.products.deleteMany({
  last_restock_date: { $lt: new Date("2022-01-01") },
  quantity_in_stock: 0
});

// 5. Create index on category and quantity_in_stock
db.products.createIndex({ category: 1, quantity_in_stock: 1 });

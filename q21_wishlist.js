//  Common Set
// Question 21: E-Commerce Wishlist System

// 1. Insert 5 wishlist documents
db.wishlist.insertMany([
  {
    wishlist_id: 1,
    customer_name: "Amit",
    product_name: "Smartphone",
    product_category: "Electronics",
    price: 15000,
    added_date: new Date("2025-03-01"),
    notify_when_available: true
  },
  {
    wishlist_id: 2,
    customer_name: "Priya",
    product_name: "Handbag",
    product_category: "Fashion",
    price: 1800,
    added_date: new Date("2025-02-10"),
    notify_when_available: true
  },
  {
    wishlist_id: 3,
    customer_name: "Amit",
    product_name: "Headphones",
    product_category: "Electronics",
    price: 2500,
    added_date: new Date("2025-01-15"),
    notify_when_available: false
  },
  {
    wishlist_id: 4,
    customer_name: "Rahul",
    product_name: "Shoes",
    product_category: "Fashion",
    price: 2200,
    added_date: new Date("2023-12-01"),
    notify_when_available: true
  },
  {
    wishlist_id: 5,
    customer_name: "Priya",
    product_name: "Laptop",
    product_category: "Electronics",
    price: 50000,
    added_date: new Date("2025-04-01"),
    notify_when_available: false
  }
]);

// 2. Find items with price < 2000 AND notify_when_available = true
db.wishlist.find({
  price: { $lt: 2000 },
  notify_when_available: true
});

// 3. Apply 20% discount for Electronics products
db.wishlist.updateMany(
  { product_category: "Electronics" },
  [
    {
      $set: {
        price: { $multiply: ["$price", 0.8] }
      }
    }
  ]
);

// 4. Delete items added before 2024-01-01
db.wishlist.deleteMany({
  added_date: { $lt: new Date("2024-01-01") }
});

// 5. Group by customer_name and count items
db.wishlist.aggregate([
  {
    $group: {
      _id: "$customer_name",
      total_items: { $sum: 1 }
    }
  }
]);

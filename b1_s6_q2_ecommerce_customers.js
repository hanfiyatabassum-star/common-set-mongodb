// B1 - set6
// Question 2: E-Commerce Platform Migration (SQL → NoSQL)

// 1. Create database (auto-created when used)
use ecommerceDB;

// 2. Create collection
db.createCollection("customers");

// 3. Insert customer with array of purchased products
db.customers.insertOne({
  customer_id: 1,
  name: "Amit Kumar",
  email: "amit@example.com",
  purchased_products: [
    "Laptop",
    "Mouse",
    "Keyboard"
  ]
});

// 4. Insert customer with embedded address document
db.customers.insertOne({
  customer_id: 2,
  name: "Priya Sharma",
  email: "priya@example.com",
  address: {
    street: "MG Road",
    city: "Bangalore",
    pincode: 560001
  }
});

// 5. Retrieve all customer documents
db.customers.find();

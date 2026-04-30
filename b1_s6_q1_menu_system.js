// B1 - Set 6
// Question 1: Coffee Shop Menu System

// 1. Insert one menu item
db.menu.insertOne({
  item_id: 1,
  name: "Cappuccino",
  category: "Coffee",
  price: 120,
  availability: true
});

// 2. Insert multiple menu items
db.menu.insertMany([
  { item_id: 2, name: "Espresso", category: "Coffee", price: 100, availability: true },
  { item_id: 3, name: "Green Tea", category: "Tea", price: 80, availability: true },
  { item_id: 4, name: "Black Tea", category: "Tea", price: 70, availability: false },
  { item_id: 5, name: "Sandwich", category: "Snack", price: 150, availability: true },
  { item_id: 6, name: "Brownie", category: "Snack", price: 90, availability: false }
]);

// 3. Retrieve items where availability is true
db.menu.find({ availability: true });

// 4. Display only name and price (projection)
db.menu.find(
  { availability: true },
  { _id: 0, name: 1, price: 1 }
);

// 5. Delete a menu item based on item_id
db.menu.deleteOne({ item_id: 6 });

// B1 - Common Set
// Question 8: Gift Card System

// 1. Insert one gift card document (collection auto-created)
db.giftcards.insertOne({
  card_id: 1,
  recipient_name: "Ananya",
  sender_name: "Rohit",
  amount: 1000,
  purchase_date: new Date("2025-04-01"),
  expiry_date: new Date("2025-06-01"),
  is_used: false
});

// 2. Insert multiple gift card records
db.giftcards.insertMany([
  {
    card_id: 2,
    recipient_name: "Amit",
    sender_name: "Neha",
    amount: 500,
    purchase_date: new Date("2025-03-15"),
    expiry_date: new Date("2025-05-15"),
    is_used: true
  },
  {
    card_id: 3,
    recipient_name: "Priya",
    sender_name: "Karan",
    amount: 1500,
    purchase_date: new Date("2025-04-10"),
    expiry_date: new Date("2025-07-10"),
    is_used: false
  },
  {
    card_id: 4,
    recipient_name: "Rahul",
    sender_name: "Sneha",
    amount: 800,
    purchase_date: new Date("2025-02-20"),
    expiry_date: new Date("2025-04-25"),
    is_used: false
  },
  {
    card_id: 5,
    recipient_name: "Meera",
    sender_name: "Vikram",
    amount: 1200,
    purchase_date: new Date("2025-04-05"),
    expiry_date: new Date("2025-08-01"),
    is_used: false
  },
  {
    card_id: 6,
    recipient_name: "Arjun",
    sender_name: "Riya",
    amount: 700,
    purchase_date: new Date("2025-03-01"),
    expiry_date: new Date("2025-04-10"),
    is_used: true
  }
]);

// 3. Retrieve cards where is_used = false AND expiry_date > today
db.giftcards.find({
  is_used: false,
  expiry_date: { $gt: new Date() }
});

// 4. Display only recipient_name, amount, and expiry_date
db.giftcards.find(
  {},
  { _id: 0, recipient_name: 1, amount: 1, expiry_date: 1 }
);

// 5. Delete a gift card based on card_id
db.giftcards.deleteOne({ card_id: 6 });

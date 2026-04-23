// Common Set
// Question 4: Expense Tracker System

// 1. Insert one expense document (collection auto-created)
db.expenses.insertOne({
  expense_id: 1,
  category: "Food",
  amount: 600,
  date: new Date("2025-04-20"),
  payment_method: "UPI",
  note: "Dinner at restaurant"
});

// 2. Insert multiple expense records
db.expenses.insertMany([
  {
    expense_id: 2,
    category: "Transport",
    amount: 300,
    date: new Date("2025-04-21"),
    payment_method: "Cash",
    note: "Auto fare"
  },
  {
    expense_id: 3,
    category: "Entertainment",
    amount: 800,
    date: new Date("2025-04-22"),
    payment_method: "Card",
    note: "Movie tickets"
  },
  {
    expense_id: 4,
    category: "Bills",
    amount: 1200,
    date: new Date("2025-04-23"),
    payment_method: "UPI",
    note: "Electricity bill"
  },
  {
    expense_id: 5,
    category: "Food",
    amount: 450,
    date: new Date("2025-04-24"),
    payment_method: "Cash",
    note: "Lunch"
  },
  {
    expense_id: 6,
    category: "Transport",
    amount: 700,
    date: new Date("2025-04-25"),
    payment_method: "UPI",
    note: "Cab ride"
  }
]);

// 3. Retrieve expenses with amount > 500
db.expenses.find({ amount: { $gt: 500 } });

// 4. Display only category, amount, and date
db.expenses.find(
  {},
  { _id: 0, category: 1, amount: 1, date: 1 }
);

// 5. Delete an expense based on expense_id
db.expenses.deleteOne({ expense_id: 6 });

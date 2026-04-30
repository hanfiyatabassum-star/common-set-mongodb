// B1 - Set6
// Question 4: Banking Customer Account Database

// 1. Create database (auto-created when used)
use bankDB;

// 2. Create collection
db.createCollection("accounts");

// 3. Insert account document (numeric + string + date)
db.accounts.insertOne({
  account_number: 1001,
  customer_name: "Rohan Mehta",
  account_type: "Savings",
  balance: 50000,
  transaction_history: [
    {
      type: "deposit",
      amount: 50000,
      transaction_date: new Date("2025-04-20")
    }
  ]
});

// 4. Retrieve a specific account using findOne()
db.accounts.findOne({ account_number: 1001 });

// 5. Display all databases
show dbs;

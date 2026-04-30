// B1 - Common Set
// Question 11: Subscription Management System

// 1. Insert 5 subscription documents
db.subscriptions.insertMany([
  {
    sub_id: 1,
    user_name: "Amit",
    plan_type: "Basic",
    monthly_fee: 199,
    start_date: new Date("2025-01-10"),
    renewal_date: new Date("2025-02-10"),
    is_active: true
  },
  {
    sub_id: 2,
    user_name: "Priya",
    plan_type: "Premium",
    monthly_fee: 499,
    start_date: new Date("2025-02-01"),
    renewal_date: new Date("2025-03-01"),
    is_active: true
  },
  {
    sub_id: 3,
    user_name: "Rahul",
    plan_type: "Standard",
    monthly_fee: 299,
    start_date: new Date("2024-12-15"),
    renewal_date: new Date("2025-01-15"),
    is_active: false
  },
  {
    sub_id: 4,
    user_name: "Neha",
    plan_type: "Basic",
    monthly_fee: 199,
    start_date: new Date("2024-11-20"),
    renewal_date: new Date("2024-12-20"),
    is_active: false
  },
  {
    sub_id: 5,
    user_name: "Karan",
    plan_type: "Premium",
    monthly_fee: 599,
    start_date: new Date("2025-01-25"),
    renewal_date: new Date("2025-02-25"),
    is_active: true
  }
]);

// 2. Find active Premium subscriptions
db.subscriptions.find({
  is_active: true,
  plan_type: "Premium"
});

// 3. Increase monthly_fee by ₹100 for Basic plan
db.subscriptions.updateMany(
  { plan_type: "Basic" },
  { $inc: { monthly_fee: 100 } }
);

// 4. Delete inactive subscriptions with renewal_date before 2025-01-01
db.subscriptions.deleteMany({
  is_active: false,
  renewal_date: { $lt: new Date("2025-01-01") }
});

// 5. Find all subscriptions sorted by monthly_fee (descending)
db.subscriptions.find(
  {},
  { _id: 0, user_name: 1, plan_type: 1, monthly_fee: 1 }
).sort({ monthly_fee: -1 });

// Common Set
// Question 25: Banking Loan Application System

// 1. Insert 5 loan documents
db.loans.insertMany([
  {
    loan_id: 1,
    applicant_name: "Amit",
    loan_type: "Home",
    loan_amount: 500000,
    interest_rate: 7.5,
    tenure_months: 240,
    application_date: new Date("2025-01-01"),
    approval_status: "Pending",
    credit_score: 720
  },
  {
    loan_id: 2,
    applicant_name: "Priya",
    loan_type: "Car",
    loan_amount: 300000,
    interest_rate: 8.0,
    tenure_months: 60,
    application_date: new Date("2024-06-01"),
    approval_status: "Approved",
    credit_score: 780
  },
  {
    loan_id: 3,
    applicant_name: "Rahul",
    loan_type: "Personal",
    loan_amount: 100000,
    interest_rate: 12.0,
    tenure_months: 24,
    application_date: new Date("2022-12-01"),
    approval_status: "Rejected",
    credit_score: 650
  },
  {
    loan_id: 4,
    applicant_name: "Neha",
    loan_type: "Home",
    loan_amount: 800000,
    interest_rate: 7.2,
    tenure_months: 300,
    application_date: new Date("2025-03-01"),
    approval_status: "Pending",
    credit_score: 760
  },
  {
    loan_id: 5,
    applicant_name: "Karan",
    loan_type: "Car",
    loan_amount: 250000,
    interest_rate: 8.5,
    tenure_months: 48,
    application_date: new Date("2023-05-01"),
    approval_status: "Approved",
    credit_score: 740
  }
]);

// 2. Find Pending loans with credit_score > 700
db.loans.find({
  approval_status: "Pending",
  credit_score: { $gt: 700 }
});

// 3. Approve loans where credit_score > 750
db.loans.updateMany(
  { credit_score: { $gt: 750 } },
  { $set: { approval_status: "Approved" } }
);

// 4. Delete Rejected loans before 2023-01-01
db.loans.deleteMany({
  application_date: { $lt: new Date("2023-01-01") },
  approval_status: "Rejected"
});

// 5. Average loan_amount per loan_type (Approved only)
db.loans.aggregate([
  {
    $match: { approval_status: "Approved" }
  },
  {
    $group: {
      _id: "$loan_type",
      avg_loan_amount: { $avg: "$loan_amount" }
    }
  }
]);

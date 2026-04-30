// Common Set
// Question 30: Manufacturing Defect Tracking System

// 1. Insert 5 defect records
db.defects.insertMany([
  {
    defect_id: 1,
    product_name: "Phone",
    batch_number: "B101",
    defect_type: "Functional",
    detection_date: new Date("2025-01-01"),
    severity: "High",
    quantity_affected: 50,
    root_cause: "Circuit issue",
    status: "Open",
    resolution_date: null
  },
  {
    defect_id: 2,
    product_name: "Laptop",
    batch_number: "B102",
    defect_type: "Cosmetic",
    detection_date: new Date("2024-06-01"),
    severity: "Low",
    quantity_affected: 20,
    root_cause: "Scratch",
    status: "Resolved",
    resolution_date: new Date("2024-06-10")
  },
  {
    defect_id: 3,
    product_name: "Tablet",
    batch_number: "B103",
    defect_type: "Safety",
    detection_date: new Date("2023-12-01"),
    severity: "High",
    quantity_affected: 10,
    root_cause: "Battery overheating",
    status: "Investigating",
    resolution_date: null
  },
  {
    defect_id: 4,
    product_name: "Phone",
    batch_number: "B104",
    defect_type: "Functional",
    detection_date: new Date("2021-12-01"),
    severity: "Medium",
    quantity_affected: 30,
    root_cause: "Software bug",
    status: "Resolved",
    resolution_date: new Date("2022-01-05")
  },
  {
    defect_id: 5,
    product_name: "Headphones",
    batch_number: "B105",
    defect_type: "Cosmetic",
    detection_date: new Date("2025-03-01"),
    severity: "High",
    quantity_affected: 15,
    root_cause: "Loose fitting",
    status: "Open",
    resolution_date: null
  }
]);

// 2. Find High severity AND Open defects
db.defects.find({
  severity: "High",
  status: "Open"
});

// 3. Resolve defects where root_cause is identified
db.defects.updateMany(
  { root_cause: { $ne: null } },
  {
    $set: {
      status: "Resolved",
      resolution_date: new Date()
    }
  }
);

// 4. Delete old resolved defects before 2022-01-01
db.defects.deleteMany({
  detection_date: { $lt: new Date("2022-01-01") },
  status: "Resolved"
});

// 5. Total quantity affected per defect_type (sorted)
db.defects.aggregate([
  {
    $group: {
      _id: "$defect_type",
      total_quantity: { $sum: "$quantity_affected" }
    }
  },
  { $sort: { total_quantity: -1 } }
]);

//  Common Set
// Question 14: Vehicle Service Center System

// 1. Insert 5 service records
db.services.insertMany([
  {
    service_id: 1,
    customer_name: "Amit",
    vehicle_number: "KA01AB1234",
    service_type: "Oil Change",
    service_date: new Date("2025-04-20"),
    cost: 800,
    status: "Scheduled"
  },
  {
    service_id: 2,
    customer_name: "Priya",
    vehicle_number: "KA02CD5678",
    service_type: "Repair",
    service_date: new Date("2026-07-15"),
    cost: 1500,
    status: "InProgress"
  },
  {
    service_id: 3,
    customer_name: "Rahul",
    vehicle_number: "KA03EF9012",
    service_type: "Inspection",
    service_date: new Date("2024-12-20"),
    cost: 400,
    status: "Completed"
  },
  {
    service_id: 4,
    customer_name: "Neha",
    vehicle_number: "KA04GH3456",
    service_type: "Repair",
    service_date: new Date("2026-06-10"),
    cost: 2000,
    status: "InProgress"
  },
  {
    service_id: 5,
    customer_name: "Karan",
    vehicle_number: "KA05IJ7890",
    service_type: "Oil Change",
    service_date: new Date("2024-11-01"),
    cost: 300,
    status: "Completed"
  }
]);

// 2. Find InProgress records before 2026-08-01
db.services.find({
  status: "InProgress",
  service_date: { $lt: new Date("2026-08-01") }
});

// 3. Update status to Completed where service_date < 2025-01-01
db.services.updateMany(
  { service_date: { $lt: new Date("2025-01-01") } },
  { $set: { status: "Completed" } }
);

// 4. Delete Completed records with cost < 500
db.services.deleteMany({
  status: "Completed",
  cost: { $lt: 500 }
});

// 5. Sort by cost (descending) and show selected fields
db.services.find(
  {},
  { _id: 0, customer_name: 1, service_type: 1, cost: 1 }
).sort({ cost: -1 });

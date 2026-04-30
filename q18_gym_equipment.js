//  Common Set
// Question 18: Gym Equipment Maintenance Tracker

// 1. Insert 5 equipment documents
db.equipment.insertMany([
  {
    equip_id: 1,
    equip_name: "Treadmill",
    category: "Cardio",
    purchase_date: new Date("2018-05-10"),
    last_maintenance_date: new Date("2025-02-01"),
    next_maintenance_date: new Date("2025-06-01"),
    condition: "Good"
  },
  {
    equip_id: 2,
    equip_name: "Dumbbells",
    category: "Strength",
    purchase_date: new Date("2012-03-15"),
    last_maintenance_date: new Date("2024-12-01"),
    next_maintenance_date: new Date("2025-04-01"),
    condition: "NeedsService"
  },
  {
    equip_id: 3,
    equip_name: "Exercise Bike",
    category: "Cardio",
    purchase_date: new Date("2016-07-20"),
    last_maintenance_date: new Date("2025-03-01"),
    next_maintenance_date: new Date("2025-07-01"),
    condition: "Good"
  },
  {
    equip_id: 4,
    equip_name: "Bench Press",
    category: "Strength",
    purchase_date: new Date("2010-01-01"),
    last_maintenance_date: new Date("2024-10-01"),
    next_maintenance_date: new Date("2025-03-01"),
    condition: "OutOfOrder"
  },
  {
    equip_id: 5,
    equip_name: "Rowing Machine",
    category: "Cardio",
    purchase_date: new Date("2020-09-10"),
    last_maintenance_date: new Date("2025-04-01"),
    next_maintenance_date: new Date("2025-08-01"),
    condition: "NeedsService"
  }
]);

// 2. Find equipment where condition is NeedsService OR OutOfOrder
db.equipment.find({
  $or: [
    { condition: "NeedsService" },
    { condition: "OutOfOrder" }
  ]
});

// 3. Update condition to "Good" where last_maintenance_date > 2025-01-01
db.equipment.updateMany(
  { last_maintenance_date: { $gt: new Date("2025-01-01") } },
  { $set: { condition: "Good" } }
);

// 4. Delete equipment before 2015 AND condition OutOfOrder
db.equipment.deleteMany({
  purchase_date: { $lt: new Date("2015-01-01") },
  condition: "OutOfOrder"
});

// 5. Sort by next_maintenance_date ascending
db.equipment.find().sort({ next_maintenance_date: 1 });

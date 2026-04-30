// B1 - Common Set
// Question 20: Hospital Bed Availability System

// Helper for today's range
let todayStart = new Date();
todayStart.setHours(0, 0, 0, 0);

let todayEnd = new Date();
todayEnd.setHours(23, 59, 59, 999);

// 1. Insert 5 bed documents
db.beds.insertMany([
  {
    bed_id: 1,
    ward_name: "ICU",
    bed_type: "ICU",
    is_occupied: false,
    patient_name: null,
    admission_date: null,
    expected_discharge_date: null
  },
  {
    bed_id: 2,
    ward_name: "General",
    bed_type: "General",
    is_occupied: true,
    patient_name: "Amit",
    admission_date: new Date("2025-04-20"),
    expected_discharge_date: new Date("2025-04-25")
  },
  {
    bed_id: 3,
    ward_name: "ICU",
    bed_type: "ICU",
    is_occupied: false,
    patient_name: null,
    admission_date: null,
    expected_discharge_date: null
  },
  {
    bed_id: 4,
    ward_name: "Private",
    bed_type: "Private",
    is_occupied: true,
    patient_name: "Priya",
    admission_date: new Date("2025-04-22"),
    expected_discharge_date: new Date("2025-04-23")
  },
  {
    bed_id: 5,
    ward_name: "General",
    bed_type: "General",
    is_occupied: true,
    patient_name: "Rahul",
    admission_date: new Date("2025-04-10"),
    expected_discharge_date: new Date("2025-04-15")
  }
]);

// 2. Find available ICU beds
db.beds.find({
  is_occupied: false,
  ward_name: "ICU"
});

// 3. Update beds where admission_date is today
db.beds.updateMany(
  { admission_date: { $gte: todayStart, $lte: todayEnd } },
  {
    $set: {
      is_occupied: true,
      patient_name: "New Patient"
    }
  }
);

// 4. Delete occupied beds where discharge date is before today
db.beds.deleteMany({
  is_occupied: true,
  expected_discharge_date: { $lt: new Date() }
});

// 5. Sort by bed_type and display selected fields
db.beds.find(
  {},
  { _id: 0, ward_name: 1, bed_type: 1, is_occupied: 1 }
).sort({ bed_type: 1 });

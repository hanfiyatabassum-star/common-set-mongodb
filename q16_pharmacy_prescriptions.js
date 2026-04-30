//  Common Set
// Question 16: Pharmacy Prescription Tracker

// 1. Insert 5 prescription documents
db.prescriptions.insertMany([
  {
    prescription_id: 1,
    patient_name: "Amit",
    doctor_name: "Dr. Rao",
    medicine_name: "Paracetamol",
    dosage: "500mg",
    issue_date: new Date("2025-04-01"),
    expiry_date: new Date("2025-05-01"),
    status: "Active"
  },
  {
    prescription_id: 2,
    patient_name: "Priya",
    doctor_name: "Dr. Sharma",
    medicine_name: "Ibuprofen",
    dosage: "400mg",
    issue_date: new Date("2024-12-10"),
    expiry_date: new Date("2025-01-10"),
    status: "Expired"
  },
  {
    prescription_id: 3,
    patient_name: "Rahul",
    doctor_name: "Dr. Mehta",
    medicine_name: "Amoxicillin",
    dosage: "250mg",
    issue_date: new Date("2025-03-15"),
    expiry_date: new Date("2025-06-15"),
    status: "Active"
  },
  {
    prescription_id: 4,
    patient_name: "Neha",
    doctor_name: "Dr. Patel",
    medicine_name: "Cetirizine",
    dosage: "10mg",
    issue_date: new Date("2023-12-01"),
    expiry_date: new Date("2024-01-01"),
    status: "Fulfilled"
  },
  {
    prescription_id: 5,
    patient_name: "Karan",
    doctor_name: "Dr. Singh",
    medicine_name: "Metformin",
    dosage: "500mg",
    issue_date: new Date("2025-02-01"),
    expiry_date: new Date("2025-03-01"),
    status: "Expired"
  }
]);

// 2. Find Active prescriptions with expiry_date > today
db.prescriptions.find({
  status: "Active",
  expiry_date: { $gt: new Date() }
});

// 3. Update status to "Expired" where expiry_date < today
db.prescriptions.updateMany(
  { expiry_date: { $lt: new Date() } },
  { $set: { status: "Expired" } }
);

// 4. Delete Fulfilled prescriptions issued before 2024-01-01
db.prescriptions.deleteMany({
  status: "Fulfilled",
  issue_date: { $lt: new Date("2024-01-01") }
});

// 5. Sort by issue_date descending and show selected fields
db.prescriptions.find(
  {},
  { _id: 0, patient_name: 1, medicine_name: 1, status: 1 }
).sort({ issue_date: -1 });

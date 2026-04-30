// B1 - Common Set
// Question 12: Employee Attendance Tracker

// 1. Insert 5 attendance records
db.attendance.insertMany([
  {
    record_id: 1,
    emp_name: "Amit",
    department: "IT",
    date: new Date("2025-04-20"),
    status: "Present",
    check_in_time: "09:00"
  },
  {
    record_id: 2,
    emp_name: "Priya",
    department: "HR",
    date: new Date("2025-04-20"),
    status: "Absent",
    check_in_time: null
  },
  {
    record_id: 3,
    emp_name: "Rahul",
    department: "IT",
    date: new Date("2025-04-21"),
    status: "Absent",
    check_in_time: null
  },
  {
    record_id: 4,
    emp_name: "Neha",
    department: "Finance",
    date: new Date("2023-12-25"),
    status: "Leave",
    check_in_time: null
  },
  {
    record_id: 5,
    emp_name: "Karan",
    department: "IT",
    date: new Date("2025-04-22"),
    status: "Present",
    check_in_time: "09:30"
  }
]);

// 2. Find Absent employees in IT department
db.attendance.find({
  status: "Absent",
  department: "IT"
});

// 3. Update status to "Present" where check_in_time is not null
db.attendance.updateMany(
  { check_in_time: { $ne: null } },
  { $set: { status: "Present" } }
);

// 4. Delete records before 2024-01-01 AND status = "Leave"
db.attendance.deleteMany({
  status: "Leave",
  date: { $lt: new Date("2024-01-01") }
});

// 5. Find Present records sorted by date (ascending)
db.attendance.find({ status: "Present" }).sort({ date: 1 });

// B1 - Common Set
// Question 6: Student Hostel Room Allotment

// 1. Insert one student document (collection auto-created)
db.hostel.insertOne({
  student_id: 1,
  name: "Arjun",
  room_number: 101,
  block_name: "A",
  bed_number: 1,
  check_in_date: new Date("2025-04-20")
});

// 2. Insert multiple student records
db.hostel.insertMany([
  {
    student_id: 2,
    name: "Riya",
    room_number: 102,
    block_name: "A",
    bed_number: 2,
    check_in_date: new Date("2025-04-21")
  },
  {
    student_id: 3,
    name: "Karan",
    room_number: 201,
    block_name: "B",
    bed_number: 1,
    check_in_date: new Date("2025-04-22")
  },
  {
    student_id: 4,
    name: "Sneha",
    room_number: 103,
    block_name: "A",
    bed_number: 1,
    check_in_date: new Date("2025-04-23")
  },
  {
    student_id: 5,
    name: "Vikram",
    room_number: 202,
    block_name: "B",
    bed_number: 2,
    check_in_date: new Date("2025-04-24")
  },
  {
    student_id: 6,
    name: "Neha",
    room_number: 104,
    block_name: "A",
    bed_number: 2,
    check_in_date: new Date("2025-04-25")
  }
]);

// 3. Retrieve all students from block A
db.hostel.find({ block_name: "A" });

// 4. Display only name, room_number, and block_name
db.hostel.find(
  {},
  { _id: 0, name: 1, room_number: 1, block_name: 1 }
);

// 5. Delete a student based on student_id
db.hostel.deleteOne({ student_id: 6 });

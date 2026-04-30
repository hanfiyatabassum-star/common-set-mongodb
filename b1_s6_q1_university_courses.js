// B1 - set6
// Question 1: University Course Management System

// 1. Create database (MongoDB auto-creates when used)
use universityDB;

// 2. Create collection
db.createCollection("courses");

// 3. Insert one course document
db.courses.insertOne({
  course_id: 101,
  course_name: "Database Management Systems",
  credits: 4,
  instructor_name: "Dr. Sharma",
  semester: "Semester 3"
});

// 4. Retrieve all course records
db.courses.find();

// 5. Delete course where course_id = 101
db.courses.deleteOne({ course_id: 101 });

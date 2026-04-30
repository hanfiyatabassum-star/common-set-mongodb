//  Common Set
// Question 15: Book Reading Challenge Tracker

// 1. Insert 5 reading records
db.readings.insertMany([
  {
    record_id: 1,
    member_name: "Amit",
    book_title: "The Alchemist",
    genre: "Fiction",
    pages_read: 120,
    total_pages: 200,
    start_date: new Date("2025-04-01"),
    completion_date: null,
    is_completed: false
  },
  {
    record_id: 2,
    member_name: "Priya",
    book_title: "Atomic Habits",
    genre: "Self-help",
    pages_read: 250,
    total_pages: 250,
    start_date: new Date("2025-03-10"),
    completion_date: new Date("2025-03-20"),
    is_completed: true
  },
  {
    record_id: 3,
    member_name: "Rahul",
    book_title: "Harry Potter",
    genre: "Fiction",
    pages_read: 300,
    total_pages: 350,
    start_date: new Date("2025-02-15"),
    completion_date: null,
    is_completed: false
  },
  {
    record_id: 4,
    member_name: "Neha",
    book_title: "Rich Dad Poor Dad",
    genre: "Finance",
    pages_read: 180,
    total_pages: 180,
    start_date: new Date("2022-12-01"),
    completion_date: new Date("2022-12-20"),
    is_completed: true
  },
  {
    record_id: 5,
    member_name: "Karan",
    book_title: "The Hobbit",
    genre: "Fiction",
    pages_read: 90,
    total_pages: 300,
    start_date: new Date("2022-11-01"),
    completion_date: null,
    is_completed: false
  }
]);

// 2. Find incomplete records with pages_read > 100
db.readings.find({
  is_completed: false,
  pages_read: { $gt: 100 }
});

// 3. Update is_completed to true where completion_date is not null
db.readings.updateMany(
  { completion_date: { $ne: null } },
  { $set: { is_completed: true } }
);

// 4. Delete old incomplete records
db.readings.deleteMany({
  is_completed: false,
  start_date: { $lt: new Date("2023-01-01") }
});

// 5. Find Fiction books that are completed
db.readings.find({
  genre: "Fiction",
  is_completed: true
});

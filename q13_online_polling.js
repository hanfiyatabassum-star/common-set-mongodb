//  Common Set
// Question 13: Online Polling System

// 1. Insert 5 poll documents
db.polls.insertMany([
  {
    poll_id: 1,
    question: "Favorite color?",
    options: ["Red", "Blue", "Green"],
    votes: [10, 15, 5],
    created_date: new Date("2025-01-01"),
    end_date: new Date("2025-06-01"),
    is_active: true
  },
  {
    poll_id: 2,
    question: "Best programming language?",
    options: ["Python", "Java", "C++", "JavaScript"],
    votes: [20, 10, 5, 15],
    created_date: new Date("2024-12-01"),
    end_date: new Date("2025-05-01"),
    is_active: true
  },
  {
    poll_id: 3,
    question: "Favorite food?",
    options: ["Pizza", "Burger"],
    votes: [25, 30],
    created_date: new Date("2022-12-01"),
    end_date: new Date("2023-01-10"),
    is_active: false
  },
  {
    poll_id: 4,
    question: "Best sport?",
    options: ["Cricket", "Football", "Tennis", "Badminton"],
    votes: [40, 35, 20, 15],
    created_date: new Date("2025-02-01"),
    end_date: new Date("2025-07-01"),
    is_active: true
  },
  {
    poll_id: 5,
    question: "Preferred device?",
    options: ["Mobile", "Laptop", "Tablet"],
    votes: [50, 30, 10],
    created_date: new Date("2022-05-01"),
    end_date: new Date("2023-02-01"),
    is_active: false
  }
]);

// 2. Find active polls where end_date > today
db.polls.find({
  is_active: true,
  end_date: { $gt: new Date() }
});

// 3. Update is_active to false where end_date < today
db.polls.updateMany(
  { end_date: { $lt: new Date() } },
  { $set: { is_active: false } }
);

// 4. Delete old inactive polls
db.polls.deleteMany({
  is_active: false,
  created_date: { $lt: new Date("2023-01-01") }
});

// 5. Find polls where options array length > 3
db.polls.find({
  $expr: { $gt: [ { $size: "$options" }, 3 ] }
});

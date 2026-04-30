// Common Set
// Question 19: Online Course Review System

// 1. Insert 5 review documents
db.reviews.insertMany([
  {
    review_id: 1,
    course_name: "MongoDB Basics",
    student_name: "Amit",
    rating: 5,
    review_text: "Great course!",
    review_date: new Date("2025-03-01"),
    likes_count: 20,
    is_verified_purchase: false
  },
  {
    review_id: 2,
    course_name: "Python for Beginners",
    student_name: "Priya",
    rating: 4,
    review_text: "Good content",
    review_date: new Date("2025-02-10"),
    likes_count: 8,
    is_verified_purchase: true
  },
  {
    review_id: 3,
    course_name: "Advanced MongoDB",
    student_name: "Rahul",
    rating: 5,
    review_text: "Very useful",
    review_date: new Date("2025-04-01"),
    likes_count: 15,
    is_verified_purchase: false
  },
  {
    review_id: 4,
    course_name: "Java Programming",
    student_name: "Neha",
    rating: 1,
    review_text: "Not helpful",
    review_date: new Date("2023-12-01"),
    likes_count: 2,
    is_verified_purchase: true
  },
  {
    review_id: 5,
    course_name: "MongoDB Advanced Topics",
    student_name: "Karan",
    rating: 5,
    review_text: "Excellent!",
    review_date: new Date("2025-01-15"),
    likes_count: 25,
    is_verified_purchase: false
  }
]);

// 2. Find reviews with rating > 4 AND likes_count > 10
db.reviews.find({
  rating: { $gt: 4 },
  likes_count: { $gt: 10 }
});

// 3. Update is_verified_purchase = true where course_name contains "MongoDB"
db.reviews.updateMany(
  { course_name: { $regex: "MongoDB", $options: "i" } },
  { $set: { is_verified_purchase: true } }
);

// 4. Delete reviews before 2024-01-01 AND rating = 1
db.reviews.deleteMany({
  review_date: { $lt: new Date("2024-01-01") },
  rating: 1
});

// 5. Sort by rating (descending) and show selected fields
db.reviews.find(
  {},
  { _id: 0, course_name: 1, student_name: 1, rating: 1 }
).sort({ rating: -1 });

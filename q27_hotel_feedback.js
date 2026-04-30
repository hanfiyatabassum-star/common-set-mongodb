// Common Set
// Question 27: Hotel Guest Feedback System

// 1. Insert 5 feedback documents
db.feedback.insertMany([
  {
    feedback_id: 1,
    guest_name: "Amit",
    hotel_name: "Grand Palace",
    room_number: 101,
    stay_dates: "2025-04-01 to 2025-04-03",
    cleanliness_rating: 5,
    service_rating: 4,
    overall_rating: 5,
    comments: "Excellent stay",
    feedback_date: new Date("2025-04-05"),
    would_recommend: true
  },
  {
    feedback_id: 2,
    guest_name: "Priya",
    hotel_name: "Sea View",
    room_number: 202,
    stay_dates: "2025-03-10 to 2025-03-12",
    cleanliness_rating: 3,
    service_rating: 2,
    overall_rating: 2,
    comments: "Not good",
    feedback_date: new Date("2025-03-15"),
    would_recommend: false
  },
  {
    feedback_id: 3,
    guest_name: "Rahul",
    hotel_name: "Grand Palace",
    room_number: 103,
    stay_dates: "2025-02-01 to 2025-02-05",
    cleanliness_rating: 4,
    service_rating: 5,
    overall_rating: 5,
    comments: "Great service",
    feedback_date: new Date("2025-02-06"),
    would_recommend: true
  },
  {
    feedback_id: 4,
    guest_name: "Neha",
    hotel_name: "City Inn",
    room_number: 301,
    stay_dates: "2022-12-01 to 2022-12-03",
    cleanliness_rating: 1,
    service_rating: 1,
    overall_rating: 1,
    comments: "Very bad",
    feedback_date: new Date("2022-12-05"),
    would_recommend: false
  },
  {
    feedback_id: 5,
    guest_name: "Karan",
    hotel_name: "Sea View",
    room_number: 204,
    stay_dates: "2025-01-10 to 2025-01-12",
    cleanliness_rating: 4,
    service_rating: 4,
    overall_rating: 4,
    comments: "Good stay",
    feedback_date: new Date("2025-01-15"),
    would_recommend: true
  }
]);

// 2. Find low-rated feedback (rating < 3 AND not recommended)
db.feedback.find({
  overall_rating: { $lt: 3 },
  would_recommend: false
});

// 3. Update would_recommend = true where overall_rating > 4
db.feedback.updateMany(
  { overall_rating: { $gt: 4 } },
  { $set: { would_recommend: true } }
);

// 4. Delete poor feedback before 2023-01-01
db.feedback.deleteMany({
  feedback_date: { $lt: new Date("2023-01-01") },
  overall_rating: 1
});

// 5. Average cleanliness and service rating per hotel
db.feedback.aggregate([
  {
    $group: {
      _id: "$hotel_name",
      avg_cleanliness: { $avg: "$cleanliness_rating" },
      avg_service: { $avg: "$service_rating" }
    }
  }
]);

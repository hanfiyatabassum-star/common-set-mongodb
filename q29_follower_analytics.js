// Common Set
// Question 29: Social Media Follower Analytics

// 1. Insert 5 follower documents
db.followers.insertMany([
  {
    follower_id: 1,
    follower_name: "Amit",
    followed_since: new Date("2024-01-01"),
    engagement_score: 85,
    is_active: true,
    location: "Bangalore",
    interests: ["Fitness", "Travel"],
    last_interaction_date: new Date("2025-03-01")
  },
  {
    follower_id: 2,
    follower_name: "Priya",
    followed_since: new Date("2023-05-01"),
    engagement_score: 90,
    is_active: true,
    location: "Mumbai",
    interests: ["Fashion", "Travel"],
    last_interaction_date: new Date("2025-02-01")
  },
  {
    follower_id: 3,
    follower_name: "Rahul",
    followed_since: new Date("2021-12-01"),
    engagement_score: 15,
    is_active: false,
    location: "Delhi",
    interests: ["Gaming"],
    last_interaction_date: new Date("2023-01-01")
  },
  {
    follower_id: 4,
    follower_name: "Neha",
    followed_since: new Date("2025-01-01"),
    engagement_score: 88,
    is_active: true,
    location: "Chennai",
    interests: ["Fitness", "Food"],
    last_interaction_date: new Date("2025-04-01")
  },
  {
    follower_id: 5,
    follower_name: "Karan",
    followed_since: new Date("2022-02-01"),
    engagement_score: 70,
    is_active: true,
    location: "Hyderabad",
    interests: ["Travel", "Food"],
    last_interaction_date: new Date("2024-12-01")
  }
]);

// 2. Find high engagement active followers
db.followers.find({
  engagement_score: { $gt: 80 },
  is_active: true
});

// 3. Set inactive if last interaction before 2025-01-01
db.followers.updateMany(
  { last_interaction_date: { $lt: new Date("2025-01-01") } },
  { $set: { is_active: false } }
);

// 4. Delete old low-engagement followers
db.followers.deleteMany({
  followed_since: { $lt: new Date("2022-01-01") },
  engagement_score: { $lt: 20 }
});

// 5. Find most common interest
db.followers.aggregate([
  { $unwind: "$interests" },
  {
    $group: {
      _id: "$interests",
      count: { $sum: 1 }
    }
  },
  { $sort: { count: -1 } },
  { $limit: 1 }
]);

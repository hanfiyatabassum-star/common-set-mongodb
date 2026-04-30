// B1 - University Set
// Question 3: Social Media User Profile System

// 1. Create database (auto-created when used)
use socialMediaDB;

// 2. Create collection
db.createCollection("users");

// 3. Insert user with array of friend names
db.users.insertOne({
  user_id: 1,
  username: "rahul123",
  email: "rahul@example.com",
  friends: ["Amit", "Priya", "Sneha"]
});

// 4. Insert user with nested posts array
db.users.insertOne({
  user_id: 2,
  username: "neha456",
  email: "neha@example.com",
  friends: ["Ravi", "Kiran"],
  posts: [
    {
      post_id: 1,
      content: "Hello world!",
      likes: 10,
      comments: ["Nice!", "Welcome!"]
    },
    {
      post_id: 2,
      content: "MongoDB is awesome",
      likes: 25,
      comments: ["True!", "Agreed!"]
    }
  ]
});

// 5. Retrieve all user documents
db.users.find();

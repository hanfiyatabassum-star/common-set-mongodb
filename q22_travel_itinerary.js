// Common Set
// Question 22: Travel Itinerary Planner

// 1. Insert 5 itinerary documents
db.itineraries.insertMany([
  {
    itinerary_id: 1,
    customer_name: "Amit",
    destination: "Manali",
    trip_start_date: new Date("2025-06-01"),
    trip_end_date: new Date("2025-06-07"),
    budget: 60000,
    activities: ["Trekking", "Camping"],
    hotel_name: "Snow View",
    booking_status: "Confirmed"
  },
  {
    itinerary_id: 2,
    customer_name: "Priya",
    destination: "Goa",
    trip_start_date: new Date("2025-05-10"),
    trip_end_date: new Date("2025-05-15"),
    budget: 40000,
    activities: ["Beach", "Party"],
    hotel_name: "Sea Breeze",
    booking_status: "Pending"
  },
  {
    itinerary_id: 3,
    customer_name: "Rahul",
    destination: "Leh",
    trip_start_date: new Date("2023-12-01"),
    trip_end_date: new Date("2023-12-10"),
    budget: 70000,
    activities: ["Trekking", "Biking"],
    hotel_name: "Mountain Stay",
    booking_status: "Cancelled"
  },
  {
    itinerary_id: 4,
    customer_name: "Neha",
    destination: "Kerala",
    trip_start_date: new Date("2025-07-01"),
    trip_end_date: new Date("2025-07-05"),
    budget: 55000,
    activities: ["Boating", "Sightseeing"],
    hotel_name: "Green Resort",
    booking_status: "Confirmed"
  },
  {
    itinerary_id: 5,
    customer_name: "Karan",
    destination: "Rishikesh",
    trip_start_date: new Date("2025-04-01"),
    trip_end_date: new Date("2025-04-05"),
    budget: 30000,
    activities: ["Rafting", "Trekking"],
    hotel_name: "River View",
    booking_status: "Pending"
  }
]);

// 2. Find Confirmed trips with budget > 50000
db.itineraries.find({
  booking_status: "Confirmed",
  budget: { $gt: 50000 }
});

// 3. Cancel trips where trip_start_date is before today
db.itineraries.updateMany(
  { trip_start_date: { $lt: new Date() } },
  { $set: { booking_status: "Cancelled" } }
);

// 4. Delete Cancelled trips ending before 2024-01-01
db.itineraries.deleteMany({
  booking_status: "Cancelled",
  trip_end_date: { $lt: new Date("2024-01-01") }
});

// 5. Find itineraries where activities contain "Trekking"
db.itineraries.find({
  activities: { $in: ["Trekking"] }
});

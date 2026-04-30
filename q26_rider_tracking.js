// B1 - Common Set
// Question 26: Food Delivery Rider Tracking System

// 1. Insert 5 rider documents
db.riders.insertMany([
  {
    rider_id: 1,
    rider_name: "Amit",
    city: "Bangalore",
    vehicle_type: "Bike",
    total_deliveries: 25,
    average_rating: 4.7,
    current_status: "Available",
    earnings_today: 500,
    delivery_history: [101, 102, 103]
  },
  {
    rider_id: 2,
    rider_name: "Priya",
    city: "Mumbai",
    vehicle_type: "Scooter",
    total_deliveries: 15,
    average_rating: 4.3,
    current_status: "Busy",
    earnings_today: 300,
    delivery_history: [104, 105]
  },
  {
    rider_id: 3,
    rider_name: "Rahul",
    city: "Delhi",
    vehicle_type: "Bike",
    total_deliveries: 30,
    average_rating: 4.8,
    current_status: "Available",
    earnings_today: 700,
    delivery_history: [106, 107, 108, 109]
  },
  {
    rider_id: 4,
    rider_name: "Neha",
    city: "Chennai",
    vehicle_type: "Scooter",
    total_deliveries: 0,
    average_rating: 0,
    current_status: "Offline",
    earnings_today: 0,
    delivery_history: []
  },
  {
    rider_id: 5,
    rider_name: "Karan",
    city: "Hyderabad",
    vehicle_type: "Bike",
    total_deliveries: 22,
    average_rating: 4.6,
    current_status: "Available",
    earnings_today: 600,
    delivery_history: [110, 111]
  }
]);

// 2. Find Available riders with rating > 4.5
db.riders.find({
  current_status: "Available",
  average_rating: { $gt: 4.5 }
});

// 3. Add ₹100 to earnings_today where total_deliveries > 20
db.riders.updateMany(
  { total_deliveries: { $gt: 20 } },
  { $inc: { earnings_today: 100 } }
);

// 4. Delete Offline riders with 0 deliveries
db.riders.deleteMany({
  current_status: "Offline",
  total_deliveries: 0
});

// 5. Create multikey index on delivery_history
db.riders.createIndex({ delivery_history: 1 });

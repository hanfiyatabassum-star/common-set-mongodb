//  Common Set
// Question 17: Cab Ride Booking System

// Helper for "today" range (start to end of today)
let todayStart = new Date();
todayStart.setHours(0, 0, 0, 0);

let todayEnd = new Date();
todayEnd.setHours(23, 59, 59, 999);

// 1. Insert 5 ride documents
db.rides.insertMany([
  {
    ride_id: 1,
    rider_name: "Amit",
    driver_name: "Ravi",
    pickup_location: "BTM",
    drop_location: "MG Road",
    ride_date: new Date(),
    distance_km: 12,
    fare: 350,
    ride_status: "Requested"
  },
  {
    ride_id: 2,
    rider_name: "Priya",
    driver_name: "Kiran",
    pickup_location: "Whitefield",
    drop_location: "Indiranagar",
    ride_date: new Date("2025-04-20"),
    distance_km: 8,
    fare: 200,
    ride_status: "Completed"
  },
  {
    ride_id: 3,
    rider_name: "Rahul",
    driver_name: "Suresh",
    pickup_location: "Electronic City",
    drop_location: null,
    ride_date: new Date(),
    distance_km: 15,
    fare: 400,
    ride_status: "Requested"
  },
  {
    ride_id: 4,
    rider_name: "Neha",
    driver_name: "Arun",
    pickup_location: "Yelahanka",
    drop_location: "Hebbal",
    ride_date: new Date("2024-05-01"),
    distance_km: 6,
    fare: 150,
    ride_status: "Cancelled"
  },
  {
    ride_id: 5,
    rider_name: "Karan",
    driver_name: "Vikram",
    pickup_location: "Marathahalli",
    drop_location: "Silk Board",
    ride_date: new Date(),
    distance_km: 18,
    fare: 500,
    ride_status: "Accepted"
  }
]);

// 2. Find rides with status "Requested" AND ride_date is today
db.rides.find({
  ride_status: "Requested",
  ride_date: { $gte: todayStart, $lte: todayEnd }
});

// 3. Update ride_status to "Completed" where drop_location is not null
db.rides.updateMany(
  { drop_location: { $ne: null } },
  { $set: { ride_status: "Completed" } }
);

// 4. Delete Cancelled rides before 2024-06-01
db.rides.deleteMany({
  ride_status: "Cancelled",
  ride_date: { $lt: new Date("2024-06-01") }
});

// 5. Find rides with distance > 10 AND fare > 300
db.rides.find({
  distance_km: { $gt: 10 },
  fare: { $gt: 300 }
});

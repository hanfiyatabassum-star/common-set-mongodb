// B1 - Common Set
// Question 9: Courier Parcel Tracker

// 1. Insert one parcel document (collection auto-created)
db.parcels.insertOne({
  parcel_id: 1,
  sender_name: "Amit",
  receiver_name: "Ravi",
  weight: 2.5,
  shipping_cost: 250,
  booking_date: new Date("2025-04-20"),
  delivery_status: "Pending"
});

// 2. Insert multiple parcel records
db.parcels.insertMany([
  {
    parcel_id: 2,
    sender_name: "Priya",
    receiver_name: "Neha",
    weight: 1.2,
    shipping_cost: 150,
    booking_date: new Date("2025-04-21"),
    delivery_status: "Shipped"
  },
  {
    parcel_id: 3,
    sender_name: "Karan",
    receiver_name: "Sneha",
    weight: 3.0,
    shipping_cost: 300,
    booking_date: new Date("2025-04-22"),
    delivery_status: "Pending"
  },
  {
    parcel_id: 4,
    sender_name: "Rohit",
    receiver_name: "Anjali",
    weight: 0.8,
    shipping_cost: 100,
    booking_date: new Date("2025-04-23"),
    delivery_status: "Delivered"
  },
  {
    parcel_id: 5,
    sender_name: "Meera",
    receiver_name: "Vikram",
    weight: 2.0,
    shipping_cost: 220,
    booking_date: new Date("2025-04-24"),
    delivery_status: "Pending"
  },
  {
    parcel_id: 6,
    sender_name: "Arjun",
    receiver_name: "Riya",
    weight: 1.5,
    shipping_cost: 180,
    booking_date: new Date("2025-04-25"),
    delivery_status: "Shipped"
  }
]);

// 3. Retrieve all parcels with status "Pending"
db.parcels.find({ delivery_status: "Pending" });

// 4. Display only sender_name, receiver_name, and shipping_cost
db.parcels.find(
  {},
  { _id: 0, sender_name: 1, receiver_name: 1, shipping_cost: 1 }
);

// 5. Delete a parcel based on parcel_id
db.parcels.deleteOne({ parcel_id: 6 });

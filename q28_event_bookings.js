// B1 - Common Set
// Question 28: Event Ticket Booking System

// 1. Insert 5 booking documents
db.bookings.insertMany([
  {
    booking_id: 1,
    event_name: "Music Fest",
    event_date: new Date("2026-11-01"),
    venue: "Bangalore",
    customer_name: "Amit",
    ticket_type: "VIP",
    number_of_tickets: 2,
    total_price: 5000,
    booking_date: new Date("2026-09-01"),
    payment_status: "Paid"
  },
  {
    booking_id: 2,
    event_name: "Tech Conference",
    event_date: new Date("2026-09-15"),
    venue: "Mumbai",
    customer_name: "Priya",
    ticket_type: "General",
    number_of_tickets: 1,
    total_price: 2000,
    booking_date: new Date("2026-08-01"),
    payment_status: "Pending"
  },
  {
    booking_id: 3,
    event_name: "Art Expo",
    event_date: new Date("2025-05-01"),
    venue: "Delhi",
    customer_name: "Rahul",
    ticket_type: "Student",
    number_of_tickets: 3,
    total_price: 1500,
    booking_date: new Date("2025-04-01"),
    payment_status: "Paid"
  },
  {
    booking_id: 4,
    event_name: "Music Fest",
    event_date: new Date("2026-12-01"),
    venue: "Bangalore",
    customer_name: "Neha",
    ticket_type: "General",
    number_of_tickets: 4,
    total_price: 8000,
    booking_date: new Date("2026-10-01"),
    payment_status: "Paid"
  },
  {
    booking_id: 5,
    event_name: "Tech Conference",
    event_date: new Date("2023-12-01"),
    venue: "Mumbai",
    customer_name: "Karan",
    ticket_type: "VIP",
    number_of_tickets: 2,
    total_price: 4000,
    booking_date: new Date("2023-11-01"),
    payment_status: "Pending"
  }
]);

// 2. Find bookings after 2026-10-01 AND Paid
db.bookings.find({
  event_date: { $gt: new Date("2026-10-01") },
  payment_status: "Paid"
});

// 3. Refund Paid bookings where event_date < today
db.bookings.updateMany(
  {
    event_date: { $lt: new Date() },
    payment_status: "Paid"
  },
  { $set: { payment_status: "Refunded" } }
);

// 4. Delete Pending bookings before 2024-01-01
db.bookings.deleteMany({
  payment_status: "Pending",
  booking_date: { $lt: new Date("2024-01-01") }
});

// 5. Total tickets sold per event
db.bookings.aggregate([
  {
    $group: {
      _id: "$event_name",
      total_tickets: { $sum: "$number_of_tickets" }
    }
  }
]);

// Common Set
// Question 2: Contact Book System

// 1. Insert one contact document (collection auto-created)
db.contacts.insertOne({
  contact_id: 1,
  first_name: "Rahul",
  last_name: "Sharma",
  phone: "9876543210",
  email: "rahul@example.com",
  city: "Mumbai"
});

// 2. Insert multiple contact records
db.contacts.insertMany([
  {
    contact_id: 2,
    first_name: "Amit",
    last_name: "Verma",
    phone: "9123456780",
    email: "amit@example.com",
    city: "Delhi"
  },
  {
    contact_id: 3,
    first_name: "Priya",
    last_name: "Singh",
    phone: "9988776655",
    email: "priya@example.com",
    city: "Mumbai"
  },
  {
    contact_id: 4,
    first_name: "Neha",
    last_name: "Patel",
    phone: "9871234567",
    email: "neha@example.com",
    city: "Ahmedabad"
  },
  {
    contact_id: 5,
    first_name: "Karan",
    last_name: "Mehta",
    phone: "9012345678",
    email: "karan@example.com",
    city: "Mumbai"
  },
  {
    contact_id: 6,
    first_name: "Sneha",
    last_name: "Reddy",
    phone: "9090909090",
    email: "sneha@example.com",
    city: "Hyderabad"
  }
]);

// 3. Retrieve all contacts from Mumbai
db.contacts.find({ city: "Mumbai" });

// 4. Display only first_name, last_name, and phone
db.contacts.find(
  {},
  { _id: 0, first_name: 1, last_name: 1, phone: 1 }
);

// 5. Delete a contact based on contact_id
db.contacts.deleteOne({ contact_id: 6 });

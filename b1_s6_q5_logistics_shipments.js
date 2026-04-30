// B1 - set6
// Question 5: Logistics Shipment Tracking Database

// 1. Create database (auto-created when used)
use logisticsDB;

// 2. Create collection
db.createCollection("shipments");

// 3. Insert multiple shipment documents
db.shipments.insertMany([
  {
    shipment_id: 1,
    sender_name: "Amit",
    receiver_name: "Ravi",
    delivery_address: "Mumbai",
    package_weight: 2.5,
    shipment_status: "In Transit"
  },
  {
    shipment_id: 2,
    sender_name: "Priya",
    receiver_name: "Neha",
    delivery_address: "Bangalore",
    package_weight: 1.2,
    shipment_status: "Delivered"
  },
  {
    shipment_id: 3,
    sender_name: "Karan",
    receiver_name: "Sneha",
    delivery_address: "Delhi",
    package_weight: 3.0,
    shipment_status: "Pending"
  }
]);

// 4. Retrieve all shipment records
db.shipments.find();

// 5. Count total shipment documents
db.shipments.countDocuments();

// B1 - Common Set
// Question 7: Parking Lot Management

// 1. Insert one parking slot document (collection auto-created)
db.parking.insertOne({
  slot_id: 1,
  floor: 1,
  vehicle_type: "Car",
  is_occupied: true,
  vehicle_number: "KA01AB1234"
});

// 2. Insert multiple parking slot records
db.parking.insertMany([
  {
    slot_id: 2,
    floor: 1,
    vehicle_type: "Bike",
    is_occupied: false,
    vehicle_number: null
  },
  {
    slot_id: 3,
    floor: 2,
    vehicle_type: "Car",
    is_occupied: true,
    vehicle_number: "KA02CD5678"
  },
  {
    slot_id: 4,
    floor: 2,
    vehicle_type: "Bike",
    is_occupied: false,
    vehicle_number: null
  },
  {
    slot_id: 5,
    floor: 3,
    vehicle_type: "Car",
    is_occupied: false,
    vehicle_number: null
  },
  {
    slot_id: 6,
    floor: 3,
    vehicle_type: "Bike",
    is_occupied: true,
    vehicle_number: "KA03EF9012"
  }
]);

// 3. Retrieve all unoccupied slots
db.parking.find({ is_occupied: false });

// 4. Display only slot_id, floor, and vehicle_type
db.parking.find(
  {},
  { _id: 0, slot_id: 1, floor: 1, vehicle_type: 1 }
);

// 5. Delete a parking slot based on slot_id
db.parking.deleteOne({ slot_id: 6 });

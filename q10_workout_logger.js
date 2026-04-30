// B1 - Common Set
// Question 10: Fitness Workout Logger

// 1. Insert one workout document (collection auto-created)
db.workouts.insertOne({
  workout_id: 1,
  exercise_name: "Running",
  duration_minutes: 30,
  calories_burned: 300,
  date: new Date("2025-04-20"),
  intensity: "High"
});

// 2. Insert multiple workout records
db.workouts.insertMany([
  {
    workout_id: 2,
    exercise_name: "Yoga",
    duration_minutes: 45,
    calories_burned: 150,
    date: new Date("2025-04-21"),
    intensity: "Low"
  },
  {
    workout_id: 3,
    exercise_name: "Cycling",
    duration_minutes: 40,
    calories_burned: 350,
    date: new Date("2025-04-22"),
    intensity: "High"
  },
  {
    workout_id: 4,
    exercise_name: "Swimming",
    duration_minutes: 30,
    calories_burned: 280,
    date: new Date("2025-04-23"),
    intensity: "Medium"
  },
  {
    workout_id: 5,
    exercise_name: "Weight Training",
    duration_minutes: 50,
    calories_burned: 400,
    date: new Date("2025-04-24"),
    intensity: "High"
  },
  {
    workout_id: 6,
    exercise_name: "Walking",
    duration_minutes: 60,
    calories_burned: 200,
    date: new Date("2025-04-25"),
    intensity: "Low"
  }
]);

// 3. Retrieve workouts with intensity "High"
db.workouts.find({ intensity: "High" });

// 4. Display only exercise_name, duration_minutes, and calories_burned
db.workouts.find(
  {},
  { _id: 0, exercise_name: 1, duration_minutes: 1, calories_burned: 1 }
);

// 5. Delete a workout based on workout_id
db.workouts.deleteOne({ workout_id: 6 });

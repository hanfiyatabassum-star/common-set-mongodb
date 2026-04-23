// Common Set
// Question 3: To-Do List Manager

// 1. Insert one task document (collection auto-created)
db.tasks.insertOne({
  task_id: 1,
  title: "Complete assignment",
  description: "Finish MongoDB assignment",
  due_date: new Date("2025-04-25"),
  priority: "High",
  is_completed: false
});

// 2. Insert multiple task records
db.tasks.insertMany([
  {
    task_id: 2,
    title: "Study DBMS",
    description: "Revise MongoDB concepts",
    due_date: new Date("2025-04-26"),
    priority: "Medium",
    is_completed: false
  },
  {
    task_id: 3,
    title: "Buy groceries",
    description: "Milk, Bread, Eggs",
    due_date: new Date("2025-04-24"),
    priority: "Low",
    is_completed: true
  },
  {
    task_id: 4,
    title: "Workout",
    description: "Morning exercise",
    due_date: new Date("2025-04-23"),
    priority: "Medium",
    is_completed: false
  },
  {
    task_id: 5,
    title: "Project meeting",
    description: "Discuss final project",
    due_date: new Date("2025-04-27"),
    priority: "High",
    is_completed: false
  },
  {
    task_id: 6,
    title: "Read book",
    description: "Read 20 pages",
    due_date: new Date("2025-04-28"),
    priority: "Low",
    is_completed: true
  }
]);

// 3. Retrieve all incomplete tasks
db.tasks.find({ is_completed: false });

// 4. Display only title and due_date
db.tasks.find(
  {},
  { _id: 0, title: 1, due_date: 1 }
);

// 5. Delete a task based on task_id
db.tasks.deleteOne({ task_id: 6 });

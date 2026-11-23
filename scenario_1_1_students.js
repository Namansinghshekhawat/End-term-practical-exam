// Scenario 1.1 - Student Records
// Database: college | Collection: students
// Run in mongosh:  load("scenario_1_1_students.js")  OR copy-paste line by line

// Step 1: Create database and insert one student
use("college");
db.students.insertOne({ rollNo: 101, name: "Arun", dept: "CSE", marks: 78, city: "Chennai" });

// Step 2: Insert four more students in a single command
db.students.insertMany([
  { rollNo: 102, name: "Divya",   dept: "ECE",  marks: 85, city: "Madurai" },
  { rollNo: 103, name: "Karthik", dept: "CSE",  marks: 62, city: "Chennai" },
  { rollNo: 104, name: "Meena",   dept: "MECH", marks: 70, city: "Coimbatore" },
  { rollNo: 105, name: "Suresh",  dept: "CSE",  marks: 91, city: "Trichy" }
]);

// Step 3: Display all students, then only CSE students
db.students.find();
db.students.find({ dept: "CSE" });

// Step 4: Correct marks of roll number 103 to 68
db.students.updateOne({ rollNo: 103 }, { $set: { marks: 68 } });

// Step 5: Add field semester = 3 to every CSE student
db.students.updateMany({ dept: "CSE" }, { $set: { semester: 3 } });

// Step 6: Delete record of roll number 104
db.students.deleteOne({ rollNo: 104 });

// Step 7: Total number of students that remain
db.students.countDocuments();

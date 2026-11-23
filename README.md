# MongoDB Practical - Set 1: Operators, Basic Concepts and Database Administration

**Name:** Naman Singh Shekhawat
**Reg. No.:** PCEA24CY039
**College:** Poornima College of Engineering - Cyber Security (Advanced Computing)

## Files

| File | Description |
|------|-------------|
| `scenario_1_1_students.js` | Scenario 1.1 - CRUD operations (db: `college`, collection: `students`) |
| `scenario_1_1_output.txt` | Expected output of Scenario 1.1 |
| `scenario_1_2_employees.js` | Scenario 1.2 - Query operators, projection, sort, skip, limit (db: `hr`, collection: `employees`) |
| `scenario_1_2_output.txt` | Expected output of Scenario 1.2 |

## How to run

```bash
mongosh
load("scenario_1_1_students.js")
load("scenario_1_2_employees.js")
```
(or paste the commands one by one in `mongosh`)

## Scenarios covered
- **1.1** insertOne, insertMany, find, updateOne ($set), updateMany, deleteOne, countDocuments
- **1.2** $gt, $gte/$lte, $in, $and, $or, $nin, $regex, projection, sort, skip, limit

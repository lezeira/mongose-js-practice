import mongoose from "mongoose";

await mongoose.connect(('mongodb://127.0.0.1:27017/ICS'),
{ useNewUrlParser: true,    useUnifiedTopology: true});

const Student = mongoose.model('students', {
    stdum: String,
    fname: String,
    lname: String,
    age: Number
});

/*
const newStudent = new Student({
    stdnum: '12345',
    fName: 'Juan',
    lName: 'Dela Cruz',
    age: 20
})
let data1 = await newStudent.save();

let data2 = await Student.find({ age: 17});


let updateStudent = await Student.findOne({stdnum: "4938779315"})
updateStudent.age = 5
let data1 = await updateStudent.save();



let updateStudent = await Student.updateMany(
    {age: 17},
    { $set: {fname: "John"}}
)

*/

let data = await Student.deleteMany({age : {$gte: 17, $lte: 20}});


process.exit();
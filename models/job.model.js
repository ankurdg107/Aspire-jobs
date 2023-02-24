// const mongoose = require("mongoose")

// const Job = new mongoose.Schema({
//     name:{
//         type:String,
//         required :[true,"Please provide your name"]  
//     },
//     work:{
//         type:String,
//         required :[true,"Please provide your Type of work"]  
//     },

//     description:{
//         type:String,
//         required:[true,"Description field is required"]
//     },
//     isAvaiable:{

//         type: Boolean,
//         default:true
//     },
//     workmode :{
//         type:String,
//         // required :[true,"Please provide your workmode"] ,
        
//     },
//     address:{
//         type:String,
//         // required :[true,"Please provide your address"]  
//     },
//     workid:{
//         type:Number,
//         // required :[true,"Please provide your workid"]  

//     },
//     key:{
//         type:String
//     },
//     location:{
        
//         type:String
//     }
// });


// const Employer = mongoose.model("Job",Job); 
// module.exports = Employer


const mongoose = require('mongoose')
const Schema = mongoose.Schema

const jobSchema = new Schema({
    recruiter: {
        type: Schema.Types.ObjectId,
        ref: 'Recruiter',
        //required: true
    },
    recruiterName: {
        type: String,
    },
    recruiterEmail: {
        type: String,
    },
    title: {
        type: String,
        //required: true
    },
    description: {
        type: String,
    },
    type: {
        type: String,
        //required: true
    },
    duration: {
        type: Number,
        //required: true
    },
    salary: {
        type: Number,
    },
    app: {
        type: Number,
        default: 0
    },
    appmax: {
        type: Number,
    },
    numapp: {
        type: Number,
    },
    address: {
        type: String,
        //required: true
    },
    skills: {
        type: [String],
        //required: true
    },
    rating: {
        type: Number,
        //default: 5
    },
    numrate: {
        type: Number,
    },
    posmax: {
        type: Number,
    },
    numpos: {
        type: Number,
    },
    dateOfPost: {
        type: Date,
        default: new Date()
    },
    deadline:{
		type: Date,
		//required: true
	}
});

module.exports = Job =  mongoose.model('Job', jobSchema)
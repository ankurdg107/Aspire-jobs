const mongoose = require("mongoose")

const EmployerData = new mongoose.Schema({
    name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true,
		unique: true,
    	lowercase: true
	},
	password: {
		type: String,
		required: true,
		minlength: 6,
		maxlength: 128
	},
	role: {
		type: String,
		required: true,
		enum: ['applicant', 'recruiter'],
		default: 'applicant'
	},
	date:{
		type: Date,
		default: Date.now
	},
	rating: {
        type: Number,
        default: 5
	},
	profile_image: {
        type: String,
        // default: 'default-profile-image.jpg'
	},
	numapp: {
		type: Number,
		default: 0
	},
	numrate: {
        type: Number,
        default: 0
	},
	//recruiter
	phone_number: {
        type: Number
    },
    bio: {
        type: String,
	},
	// applicant
	education: {
        type: [education.schema]
    },
    skills: {
        type: [String]
    },
    resume: {
        type: String
	},
	working: {
		type: Boolean,
		default: false
    }
   

});
const Emp = mongoose.model("employersData",EmployerData); 
module.exports = Emp
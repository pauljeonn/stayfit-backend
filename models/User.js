const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
	{
		lastName: {
			type: String,
			required: true,
			min: 1,
			max: 20,
		},
		firstName: {
			type: String,
			required: true,
			min: 1,
			max: 20,
		},
		email: {
			type: String,
			required: true,
			max: 50,
			unique: true,
		},
		password: {
			type: String,
			required: true,
			min: 6,
		},
		exercises: {
			type: Array,
			default: [],
		},
		isAdmin: {
			type: Boolean,
			default: false,
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model('User', UserSchema);

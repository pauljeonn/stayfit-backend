const mongoose = require('mongoose');

const ExerciseSchema = new mongoose.Schema(
	{
		userId: {
			type: String,
			require: true,
		},
		title: {
			type: String,
			require: true,
		},
		desc: {
			type: String,
			max: 50,
		},
		days: {
			type: Array,
			default: [],
		},
		done: {
			type: Array,
			default: [],
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model('Exercise', ExerciseSchema);

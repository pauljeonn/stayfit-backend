const router = require('express').Router();
const Exercise = require('../models/Exercise');

// Exercise 생성
router.post('/', async (req, res) => {
	console.log(req.body);
	const newExercise = new Exercise(req.body);
	try {
		const savedExercise = await newExercise.save();
		res.status(200).json(savedExercise);
	} catch (err) {
		res.status(500).json(err);
	}
});

// Exercise 불러오기
router.get('/', async (req, res) => {
	try {
		const exercise = await Exercise.find({ userId: 1 });
		res.json(exercise);
	} catch (err) {
		console.log(err);
	}
});

module.exports = router;

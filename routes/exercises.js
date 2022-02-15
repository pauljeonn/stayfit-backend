const router = require('express').Router();
const Exercise = require('../models/Exercise');

// 운동 불러오기
router.get('/', async (req, res) => {
	try {
		const exercise = await Exercise.find({ userId: 1 });
		res.json(exercise);
	} catch (err) {
		console.log(err);
	}
});

// 운동 생성
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

// 운동 수정
router.put('/:id', async (req, res) => {
	try {
		const exercise = await Exercise.findById(req.params.id);
		const editedExercise = await exercise.updateOne({ $set: req.body });
		res.status(200).json(editedExercise);
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;

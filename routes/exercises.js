const router = require('express').Router();
const Exercise = require('../models/Exercise');

// GET EXERCISES
router.get('/:id', async (req, res) => {
	try {
		// 파라미터로 전달받은 유저 아이디로 운동 찾기
		const exercises = await Exercise.find({ userId: req.params.id });
		res.status(200).json(exercises);
	} catch (err) {
		res.status(500).json(err);
	}
});

// CREATE EXERCISE
router.post('/', async (req, res) => {
	const newExercise = new Exercise(req.body);
	try {
		const savedExercise = await newExercise.save();
		res.status(200).json(savedExercise);
	} catch (err) {
		res.status(500).json(err);
	}
});

// EDIT EXERCISE
router.put('/:id', async (req, res) => {
	try {
		const editedExercise = await Exercise.findOneAndUpdate(
			{ _id: req.params.id },
			{ $set: req.body },
			{ returnDocument: 'after' }
		);
		res.status(200).json(editedExercise);
	} catch (err) {
		res.status(500).json(err);
	}
});

// DELETE EXERCISE
router.delete('/:id', async (req, res) => {
	try {
		const deletedExercise = await Exercise.deleteOne({ _id: req.params.id });
		res.status(200).json(deletedExercise);
	} catch (err) {
		res.status(500).json(err);
	}
});

// ADD/REMOVE DONE DATE
router.put('/:id/done', async (req, res) => {
	try {
		const exercise = await Exercise.findById(req.params.id);
		// Request body에서 받은 날짜가 존재하지 않으면 done에 추가, 존재하면 제거
		if (!exercise.done.includes(req.body.doneDate)) {
			await exercise.updateOne({ $push: { done: req.body.doneDate } });
			res.status(200).json(exercise);
		} else {
			await exercise.updateOne({ $pull: { done: req.body.doneDate } });
			res.status(200).json(exercise);
		}
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;

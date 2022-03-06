const router = require('express').Router();
const User = require('../models/User');

// REGISTER
router.post('/register', async (req, res) => {
	const newUser = new User({
		lastName: req.body.lastName,
		firstName: req.body.firstName,
		email: req.body.email,
		password: req.body.password,
	});

	try {
		const user = await newUser.save();
		res.status(200).json(user);
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;
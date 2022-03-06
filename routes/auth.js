const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');

// REGISTER
router.post('/register', async (req, res) => {
	try {
		// bcrypt 사용해 패스워드 암호화
		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(req.body.password, salt);

		const newUser = new User({
			lastName: req.body.lastName,
			firstName: req.body.firstName,
			email: req.body.email,
			password: hashedPassword,
		});

		const user = await newUser.save();
		res.status(200).json(user);
	} catch (err) {
		res.status(500).json(err);
	}
});

// LOGIN
router.post('/login', async (req, res) => {
	try {
		const user = await User.findOne({ email: req.body.email });
		!user && res.status(400).send('해당 이메일 계정이 없습니다.');

		// bcrypt compare 메서드 사용해서 비밀번호 비교
		const validPassword = await bcrypt.compare(
			req.body.password,
			user.password
		);
		!validPassword && res.status(400).send('잘못된 비밀번호입니다.');

		// 비밀번호만 제외하고 유저 데이터 반환
		const { password, ...other } = user._doc;

		res.status(200).json(other);
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;

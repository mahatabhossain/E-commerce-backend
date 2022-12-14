const express = require('express');
const router = express.Router();
const signInControllar = require('../../controllars/user/userSignInControllar');
const forgotPasswordControllar = require('../../controllars/user/fortgotPassControllar');

router.route('/').post(signInControllar.signIn);
router.route('/check/email').post(forgotPasswordControllar.checkEmail);
router.route('/:id').patch(forgotPasswordControllar.forgotPassword);


module.exports = router;
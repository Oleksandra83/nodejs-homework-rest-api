const { Schema, model } = require('mongoose');

const { handleMongooseError } = require('../helpers');

const emailRegexp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
const subscriptionList = ['starter', 'pro', 'business'];

const userSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			match: emailRegexp,
			unique: true,
			required: [true, 'Email is required'],
		},
		password: {
			type: String,
			minlength: 6,
			required: [true, 'Set password for user'],
		},
		subscription: {
			type: String,
			enum: subscriptionList,
			default: 'starter',
		},
		token: {
			type: String,
			default: '',
		},
		avatarUrl: {
			type: String,
			required: true,
		},
		verify: {
			type: Boolean,
			default: false,
		},
		verificationToken: {
			type: String,
			required: [true, 'Verify token is required',]
		},
	},
	{ versionKey: false, timestamps: true }
);

userSchema.post('save', handleMongooseError);

const User = model('user', userSchema);

module.exports = { User };
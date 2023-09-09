const Joi = require('joi');

const emailRegexp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

const registerSchema = Joi.object({
	name: Joi.string().required(),
	email: Joi.string().pattern(emailRegexp).required(),
	password: Joi.string().min(6).required(),
});

const loginSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required().messages({
    'any.required': "Missing field 'email'",
  }),
  password: Joi.string().min(6).required().messages({
    'any.required': "Missing field 'password'",
  }),
});

const updateSubscriptionSchema = Joi.object({
  subscription: Joi.string()
    .valid(...subscriptionList)
    .required()
    .messages({
      'any.required': "Missing field 'subscription'",
    }),
});

module.exports = { registerSchema, loginSchema, updateSubscriptionSchema };
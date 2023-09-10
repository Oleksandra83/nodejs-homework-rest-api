const { Schema, model } = require('mongoose');

const { handleMongooseError } = require('../helpers');
const nameRegexp = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
const phoneRegexp = /^((\+)?(3)?(8)?[- ]?)?(\(?\d{3}\)?[- ]?)?\d{3}[- ]?\d{2}[- ]?\d{2}$/;

const contactSchema = new Schema(
	{
		name: {
			type: String,
			match: nameRegexp,
			required: [true, 'Set name for contact'],
		},
		email: {
			type: String,
			required: [true, 'Set email for contact'],
		},
		phone: {
			type: String,
			match: phoneRegexp,
			required: [true, 'Set phone for contact'],
		},
		favorite: {
			type: Boolean,
			default: false,
		},
		owner: {
			type: Schema.Types.ObjectId,
			ref: 'user',
			require: true,
		},
	},
	{ versionKey: false, timestamp: true }
);

contactSchema.post('save', handleMongooseError);

const Contact = model('contact', contactSchema);

module.exports = { Contact };
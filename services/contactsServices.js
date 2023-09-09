const { Contact } = require('../models/contact');
const { byIdOperation } = require('../helpers');
const { findById, findByIdAndRemove, findByIdAndUpdate } = Contact;

async function getAllContactsService(req) {
	const { _id: owner } = req.user;
	const{ page = 1, limit = 10, ...fields } = req.query;

	const skip = (page - 1) * limit;
	return await Contact.find({ ...fields, owner }, "", { skip, limit });
}

async function getContactByIdService(req) {
	return await byIdOperation(req, findById.bind(Contact));
}

async function addContactService(req) {
	const { _id: owner } = req.user;
	return Contact.create({ ...req.body, owner });
}

async function updateContactService(req) {
	return await byIdOperation(req, await findByIdAndUpdate.bind(Contact), req.body, { new: true });
}

async function removeContactService(req) {
	return await byIdOperation(req, findByIdAndRemove.bind(Contact));
}

module.exports = {
	getAllContactsService,
	getContactByIdService,
	addContactService,
	updateContactService,
	removeContactService,
};
const { Contact } = require('../models/contact');
const { byIdOperation } = require('../helpers');
const { findById, findByIdAndRemove, findByIdAndUpdate } = Contact;

async function getAllContactsService() {
	return await Contact.find();
}

async function getContactByIdService(req) {
	return await byIdOperation(req, findById.bind(Contact));
}

async function addContactService(body) {
	return Contact.create(body);
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
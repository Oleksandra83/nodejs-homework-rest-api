const { ctrlWrapper } = require('../decorators');

const {
	getAllContactsService,
	getContactByIdService,
	addContactService,
	updateContactService,
	removeContactService,
} = require('../services/contactsServices');

const getAllContacts = async (req, res) => {
	res.json(await getAllContactsService());
};

const getContactById = async (req, res) => {
	res.json(await getContactByIdService(req));
};

const addContact = async (req, res) => {
	res.status(201).json(await addContactService(req.body));
};

const updateContact = async (req, res) => {
	res.json(await updateContactService(req));
};

const updateStatusContact = async (req, res) => {
	res.json(await updateContactService(req));
};

const removeContact = async (req, res) => {
	res.json(await removeContactService(req));
};

module.exports = {
	getAllContacts: ctrlWrapper(getAllContacts),
	getContactById: ctrlWrapper(getContactById),
	addContact: ctrlWrapper(addContact),
	updateContact: ctrlWrapper(updateContact),
	updateStatusContact: ctrlWrapper(updateStatusContact),
	removeContact: ctrlWrapper(removeContact),
};
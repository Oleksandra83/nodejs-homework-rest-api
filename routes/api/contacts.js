const express = require('express');

const { getAllContacts,
	getContactById,
	addContact,
	removeContact,
	updateContact,
	updateStatusContact} = require('../../controllers/contacts-controller');

const { contactAddSchema, updateFavoriteSchema } = require('../../utils/validation/contactValidationSchemas');
const { validateBody } = require('../../decorators');
const { isValidId, authenticate } = require('../../middlewares');

const router = express.Router();

router.get('/', authenticate, getAllContacts);

router.get('/:contactId', authenticate, isValidId, getContactById);

router.post(
	'/',
	authenticate,
	validateBody(contactAddSchema), 
	addContact
	);

router.delete(
	'/:contactId', 
	authenticate, 
	isValidId, 
	removeContact
	);

router.put(
	'/:contactId',
	authenticate,
	isValidId,
	validateBody(contactAddSchema),
	updateContact
);

router.patch(
	'/:contactId/favorite',
	authenticate,
	isValidId,
	validateBody(updateFavoriteSchema),
	updateStatusContact
);

module.exports = router;
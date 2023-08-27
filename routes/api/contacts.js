const express = require('express');

const { getAllContacts,
	getContactById,
	addContact,
	removeContact,
	updateContact,
	updateStatusContact} = require('../../controllers/contacts-controller');

const { contactAddSchema, updateFavoriteSchema } = require('../../utils/validation/contactValidationSchemas');
const { validateBody } = require('../../decorators');
const { isValidId } = require('../../middlewares');

const router = express.Router();

router.get('/', getAllContacts);

router.get('/:contactId', isValidId, getContactById);

router.post('/', validateBody(contactAddSchema), addContact);

router.delete('/:contactId', isValidId, removeContact);

router.put(
	'/:contactId',
	isValidId,
	validateBody(contactAddSchema),
	updateContact
);

router.patch(
	'/:contactId/favorite',
	isValidId,
	validateBody(updateFavoriteSchema),
	updateStatusContact
);

module.exports = router;
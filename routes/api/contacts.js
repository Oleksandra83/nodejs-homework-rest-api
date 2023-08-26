const express = require('express');

const contactsController = require('../../controllers/contacts-controller');

const {schemas} = require('../../models/contact');
const { validateBody } = require('../../decorators');
const { isValidId } = require('../../middlewares');

const router = express.Router();

router.get('/', contactsController.getAllContacts);

router.get('/:contactId', isValidId, contactsController.getContactById);

router.post('/', validateBody(schemas.contactAddSchema), contactsController.addContact);

router.delete('/:contactId', isValidId, contactsController.removeContact);

router.put(
	'/:contactId',
	isValidId,
	validateBody(schemas.contactAddSchema),
	contactsController.updateContact
);

router.patch(
	'/:contactId/favorite',
	isValidId,
	validateBody(schemas.updateFavoriteSchema),
	contactsController.updateStatusContact
);

module.exports = router;
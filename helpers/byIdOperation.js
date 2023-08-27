const { HttpError } = require('./HttpError');

const byIdOperation = async (req, operation, ...args) => {
	const { contactId } = req.params;
	const result = await operation(contactId, ...args);
	if (!result) {
		throw new HttpError(404, 'Not found');
	}
	return result;
}

module.exports = byIdOperation;
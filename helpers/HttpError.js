const errorMessages = {
	400: 'Bad Request',
	401: 'Unauthorized',
	403: 'Forbidden',
	404: 'Not Found',
	409: 'Conflict',
}

class MyError extends Error {
  constructor(status, message = errorMessages[status]) {
		super(message);
		this.status = status;
    this.name = this.constructor.name;
  }
}

class HttpError extends MyError { }

class ValidationError extends HttpError {
	constructor(message) {
		super(400, message);
	}
}

class FieldRequiredError extends ValidationError {
  constructor(fieldName) {
    super(`missing required ${fieldName} field`);
    this.fieldName = fieldName;
  }
}

module.exports = { HttpError, ValidationError, FieldRequiredError };
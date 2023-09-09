const {  Router } = require('express');

const { authenticate } = require('../../middlewares');
const { validateBody } = require('../../decorators');
const {
    registerSchema,
    loginSchema,
    updateSubscriptionSchema,
} = require('../../utils/validation/userValidationSchemas');
const {
    register,
    login,
    getCurrent,
    logout,
    updateSubscription,
} = require('../../controllers/auth-controller');

const router = Router();

router.post('/register', validateBody(registerSchema), register);
router.post('/login', validateBody(loginSchema), login);
router.get('/current', authenticate, getCurrent);
router.post('/logout', authenticate, logout);
router.patch(
    '/users', 
    authenticate, 
    validateBody(updateSubscriptionSchema), 
    updateSubscription
    );

    module.exports = router;
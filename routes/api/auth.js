const {  Router } = require('express');

const { authenticate, upload } = require('../../middlewares');
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
    updateAvatar
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

router.patch('/avatars', authenticate, upload.single('avatar'), updateAvatar);
    
module.exports = router;
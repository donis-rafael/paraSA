var express = require('express');
var router = express.Router();

const login_controller = require('../controllers/login_controller');

router.get('/prueba', login_controller.get_users);
router.get('/login', login_controller.login);
router.post('/register', login_controller.registrar);
router.post('/remove', login_controller.remove);

module.exports = router;
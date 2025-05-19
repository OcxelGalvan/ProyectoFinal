const router = require('express').Router();
const handler = require('../handlers/userh');

router.route('/')
  .get(handler.getUsers)
  .post(handler.createUser);

router.route('/:email')
  .get(handler.getUserByEmail)
  .put(handler.updateUser)
  .delete(handler.deleteUser);

module.exports = router;

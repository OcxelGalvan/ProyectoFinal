const router = require('express').Router();
const auth = require('../middlewares/auth');
const handler = require('../handlers/commenth');

router.route('/:recipeId')
  .get(handler.getCommentsByRecipe)
  .post(auth, handler.createComment);

module.exports = router;

const router = require('express').Router();
const auth = require('../middlewares/auth');
const handler = require('../handlers/recipeh');

router.route('/')
  .get(handler.getRecipes)
  .post(auth, handler.createRecipe);

router.route('/:id')
  .get(handler.getRecipeById)
  .put(auth, handler.updateRecipe)
  .delete(auth, handler.deleteRecipe);

module.exports = router;

const db = require('../data/db-config');

function getRecipes() {
    return db('recipes');
}

function getShoppingList(recipe_id) {
    return db('recipies')
        .join('ingredients_measurements_recipies_quantities as imrq', 'ingredient_list as il')
        .select('recipies.recipe_name', 'il.ingredient_name', 'imrq.quantity')
        .where({ imrq.recipe_id: recipe_id });
}

function getInstructions(recipe_id) {
    return db('instructions')
        .join('recipies')
        .select('instructions.instruction', 'recipies.recipe_name')
        .where({ instructions.recipe_id: recipe_id });
}

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}

exports.seed = function(knex) {
  // Inserts seed entries
  return knex('ingredients_measurements_recipies_quantities').insert([
    {ingredient_id: 1, measurement_id: 1, recipe_id: 1, quantity: 1},
    {ingredient_id: 4, measurement_id: 2, recipe_id: 1, quantity: 20},
    {ingredient_id: 1, measurement_id: 1, recipe_id: 2, quantity: 1},
    {ingredient_id: 2, measurement_id: 4, recipe_id: 2, quantity: 2},
    {ingredient_id: 5, measurement_id: 3, recipe_id: 2, quantity: 3},
    {ingredient_id: 3, measurement_id: 2, recipe_id: 3, quantity: 8},
    {ingredient_id: 4, measurement_id: 5, recipe_id: 3, quantity: 1},
    {ingredient_id: 6, measurement_id: 5, recipe_id: 3, quantity: 2},
  ]);
};

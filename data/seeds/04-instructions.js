
exports.seed = function(knex) {
  // Inserts seed entries
  return knex('instructions').insert([
    {instruction: 'Boil noodles', recipe_id: 1},
    {instruction: 'Drain noodles', recipe_id: 1},
    {instruction: 'Add cheese', recipe_id: 1},
    {instruction: 'Boil noodles 2 min less than instructions', recipe_id: 2},
    {instruction: 'Drain noodles', recipe_id: 2},
    {instruction: 'Add cream of mushroom to noodles', recipe_id: 1},
    {instruction: 'Preheat to 350 degrees F and bake for 50 min', recipe_id: 2},
    {instruction: 'Form patty with ground beef', recipe_id: 3},
    {instruction: 'Cook on high heat for 4 min on each side', recipe_id: 3},
    {instruction: 'Add Cheese', recipe_id: 3},
    {instruction: 'Add to Bread', recipe_id: 3},
    {instruction: 'Add condiments', recipe_id: 3}
  ]);
};

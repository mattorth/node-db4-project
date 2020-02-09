
exports.seed = function(knex) {
  // Inserts seed entries
  return knex('ingredient_list').insert([
    {ingredient_name: 'Noodles'},
    {ingredient_name: 'Tuna'},
    {ingredient_name: 'Ground Beef'},
    {ingredient_name: 'Cheese'},
    {ingredient_name: 'Cream of Mushroom'},
    {ingredient_name: 'Bread'}
  ]);
};
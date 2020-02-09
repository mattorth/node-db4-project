
exports.seed = function(knex) {
    // Inserts seed entries
    return knex('recipies').insert([
      {recipe_name: 'Mac N Cheese'},
      {recipe_name: 'Tuna Casserole'},
      {recipe_name: 'Cheeseburger'},
    ]);
};


exports.up = function(knex) {
  return knex.schema
    .createTable('recipies', tbl => {
      tbl.increments();
      tbl.string('recipe_name', 128).notNullable();
    })
    .createTable('ingredient_list', tbl => {
        tbl.increments();
        tbl.string('ingredient_name', 128).notNullable().unique();
    })
    .createTable('measurement', tbl => {
        tbl.increments();
        tbl.string('unit_of_measurement', 128).notNullable().unique();
    })
    .createTable('instructions', tbl => {
        tbl.increments();
        tbl.string('instruction', 128).notNullable();
        tbl.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('recipies.id')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
    })
    .createTable('ingredients_measurements_recipies_quantities', tbl => {
        tbl.integer('ingredient_id')
            .unsigned()
            .notNullable()
            .references('ingredient_list.id')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
        tbl.integer('measurement_id')
            .unsigned()
            .notNullable()
            .references('measurement.id')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
        tbl.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('recipies.id')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
        tbl.integer('quantity')
            .notNullable();
        tbl.primary(['ingredient_id', 'measurement_id', 'recipe_id'])
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('ingredients_measurements_recipes_quantities')
    .dropTableIfExists('instructions')
    .dropTableIfExists('measurement')
    .dropTableIfExists('ingredient_list')
    .dropTableIfExists('recipies');
};

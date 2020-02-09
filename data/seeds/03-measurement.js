
exports.seed = function(knex) {
  // Inserts seed entries
  return knex('measurement').insert([
    {unit_of_measurement: 'lbs'},
    {unit_of_measurement: 'oz'},
    {unit_of_measurement: 'cups'},
    {unit_of_measurement: 'cans'},
    {unit_of_measurement: 'slices'}
  ]);
};
const db = require('../data/db-config');

function getRecipes() {
    return db('recipes');
}

function getShoppingList(recipe_id) {

}

function getInstructions(recipe_id) {

}
function find() {
    return db('schemes');
}

function findById(id) {
    return db('schemes').where({ id }).first();
}

function findSteps(id) {
    return db('schemes')
        .join('steps')
        .select('steps.scheme_id', 'schemes.scheme_name', 'steps.step_number', 'steps.instructions')
        .where({ scheme_id: id });
}

function add(schemeData) {
    return db('schemes').insert(schemeData);
}

function update(changes, id) {
    return db('schemes').where({ id }).update(changes);
}

function remove(id) {
    return db('schemes').where({ id }).del()
}


module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove
}
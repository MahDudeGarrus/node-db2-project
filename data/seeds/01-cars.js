const cars = [
    {
        vin: '1111111111111',
        make: 'Toyota',
        model: 'Prius',
        milage: 215000,
        title: 'clean',
        transmission: 'manual'
    },
    {
        vin: '1111111111111',
        make: 'Toyota',
        model: 'Corolla',
        milage: 115000,
        title: 'salvage'
    },
    {
        vin: '1111111111111',
        make: 'Ford',
        model: 'Focus',
        milage: 215000
    },
]

// exports.seed = function(knex) {
//     return knex('cars')
//     .truncate().then(() => {
//         return knex('cars').insert(cars)
//     })
// }

exports.seed = async function (knex) {
    await knex('cars').truncate()
    await knex('cars').insert(cars)
}
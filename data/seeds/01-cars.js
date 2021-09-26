const cars = [
    {
        vin: '1GDHG31U841905017',
        make: 'Toyota',
        model: 'Prius',
        mileage: 215000,
        title: 'clean',
        transmission: 'manual'
    },
    {
        vin: '2D4GP44L66R787799',
        make: 'Toyota',
        model: 'Corolla',
        mileage: 115000,
        title: 'salvage'
    },
    {
        vin: '1C6RD7LTXCS352190',
        make: 'Ford',
        model: 'Focus',
        mileage: 215000
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
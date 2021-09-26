const express = require('express')
const Car = require('./cars-model,js')
const {
    checkCarId,
    checkCarPayload,
    checkVinNumberValid,
    checkVinNumberUnique
} = require('./cars-middleware.js')

const router = express.Router()

router.get('/', async (req, res, next) => {
    try {
        const cars = await Car.getAll()
        res.json(cars)
    } catch (error) {
        next(error)
    }
})

router.get('/:id', checkCarId, async (req, res) => {
    res.json(req.car)
})

router.post('/', checkCarPayload, checkVinNumberValid, checkVinNumberUnique, async (req, res, next) => {
    res.json('posting a new car')
})

module.exports = router
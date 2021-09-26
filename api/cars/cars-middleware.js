const Car = require('./cars-model.js')
const vin = require('vin-validator')

const checkCarId = async (req, res, next) => {
  try {
    const car = await Car.getById(req.params.id)
    if (!car) {
      next({ status: 404, message: `car with id ${req.params.id} is not found` })
    } else {
      next()
    }
  } catch (error) {
    next(error)
  }
}

const checkCarPayload = (req, res, next) => {
  if (!req.body.vin) return next({ 
    status: 400,
    message: `vin is missing` 
  })
  if (!req.body.make) return next({ 
    status: 400,
    message: `make is missing` 
  })
  if (!req.body.model) return next({ 
    status: 400,
    message: `model is missing` 
  })
  if (!req.body.mileage) return next({ 
    status: 400,
    message: `mileage is missing` 
  })
  next()
}

const checkVinNumberValid = (req, res, next) => {
  const { vinObj } = req.body.vin
  if(vin.validate(vinObj)) {
    next()
  } else {
    next ({
      status: 400,
      message: `vin ${vinObj} is invalid`
    })
  }
}

const checkVinNumberUnique = async (req, res, next) => {
  const { vinObj } = req.body.vin
  try {
    const existing = await Car.getByVin(vinObj)
    if(!existing) {
      next()
    } else {
      next({
        status: 400,
        message: `vin ${vinObj} already exists`
      })
    }
  } catch (error) {
    next(error)
  }
}

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique
}

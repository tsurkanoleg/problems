// Підключаємо роутер до бек-енду
const express = require('express')

const router = express.Router()

// Підключіть файли роутів
// const test = require('./test')
const Auth = require('./auth')
const User = require('./user')
// Підключіть інші файли роутів, якщо є

// Об'єднайте файли роутів за потреби
// router.use('/', test)
router.use('/', User)
router.use('/', Auth)
// Використовуйте інші файли роутів, якщо є

router.get('/', (req, res) => {
  res.status(200).json('Hello World')
})

// Експортуємо глобальний роутер
module.exports = router

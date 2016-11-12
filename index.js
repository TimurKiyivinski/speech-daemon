const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

;(function () {
  const app = express()

  // Express body parse
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))

  // Static code
  app.use(express.static('public'))

  // Serve application
  app.listen(3000)
})()

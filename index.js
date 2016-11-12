const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const multer = require('multer')
const multerStorage = require('multer-gridfs-storage')

const Schema = mongoose.Schema

;(function () {
  const app = express()

  // Express body parse
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))

  // MongoDB
  mongoose.connect('mongodb://localhost/speech')

  // MongoDB GridFS driver
  const storage = multerStorage({
    url: 'mongodb://localhost/speech'
  })

  // Multer storage engine
  const upload = multer({
    storage: storage
  })

  // Models
  const User = mongoose.model('User', {
    email: String,
    name: String,
    type: {
      type: Number,
      min: 0,
      max: 3
    }
  })

  const Content = mongoose.model('Content', {
    userId: Schema.Types.ObjectId,
    contentId: Schema.Types.ObjectId,
    type: {
      type: Number,
      min: 0,
      max: 1
    }
  })

  // API
  app.get('/v1/video/:id', (req, res) => {
  })

  app.post('/v1/video', upload.single('Video'), (req, res) => {
    res.json({
      _id: req.file.id
    })
  })

  // Static code
  app.use(express.static('public'))

  // Serve application
  app.listen(3000)
})()

/**
*  Developer controller
*  Handles requests related to developer resources.
*
* @author Chetan Kudaravalli
*
*/
const express = require('express')
const api = express.Router()
// const Model = require('../models/developer.js')
const find = require('lodash.find')
const notfoundstring = 'Could not find developer with id='

// RESPOND WITH JSON DATA  --------------------------------------------

// GET all JSON
api.get('/data', (req, res) => {
  res.setHeader('Content-Type', 'application/json')
  const data = req.app.locals.developers.query
  res.send(JSON.stringify(data))
})


module.exports = api

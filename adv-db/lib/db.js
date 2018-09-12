'use strict'

const Sequelize = require('sequelize')
const debug = require('debug')('platziverse:db:db')
let sequelize = null

module.exports = function setupDatabase (config) {
  if (!sequelize) {
    sequelize = new Sequelize(config)
  }
  return sequelize
}

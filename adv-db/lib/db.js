'use strict'

const Sequelize = require('sequelize')
let sequelize = Sequelize

module.export = function setupDatabase (config) {
  if (!sequelize) {
    sequelize = new Sequelize(config)
  }
  return sequelize
}

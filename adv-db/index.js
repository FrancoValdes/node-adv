'use strict'

const setupDataBase = require('./lib/db')
const setupAgentModel = require('./models/agent')
const setupMetricModel = require('./models/metric')

module.exports = async function (config) {
  const sequelize = setupDataBase(config)
  const agent = setupAgentModel(config)
  const metric = setupMetricModel(config)

  agent.hasMany(metric)
  metric.belogsTo(agent)

  await sequelize.authenticate()

  if (sequelize.setup) {
    
  }

  return {
    agent,
    metric
  }
}

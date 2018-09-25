'use strict'

const test = require('ava')
const proxyquire = require('proxyquire')
const sinon = require('sinon')

let db = null
let MetricStub = null
let AgentStub = null
let sandbox = null

test.beforeEach(async () => {
  sandbox = sinon.createSandbox()

  AgentStub = {
    hasMany: sandbox.spy()
  }

  MetricStub = {
    belongsTo: sandbox.spy()
  }

  const setupDatabase = proxyquire('../', {
    './models/agent': () => AgentStub,
    './models/metric': () => MetricStub
  })
  db = await setupDatabase(db)
})

test('Agent', t => {
  t.truthy(db.agent, 'Agent service should exist')
})

test.serial('Setup', t => {
  t.true(AgentStub.hasMany.called, 'AgentModel.hasMany was executed')
  t.true(MetricStub.belongsTo.called, 'MetricModel.belongsTo was executed')
})

test.afterEach(() => {
  sandbox && sandbox.restore()
})

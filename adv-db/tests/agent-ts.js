'use strict'

const test = require('ava')

let db = null

let config = {
  logging: () => {}
}

let MetricStub = {
    belongsTo: () => {}
}

test.beforeEach(async () => {
  AgentStub = {
      hasMany: () => {}
  }

  const setupDatabase = proxyquire('../',{
      './models/agent': () => AgentStub,
      './models/metric': () => MetricStub,
  })
  db = await setupDatabase(db)
})

test('Agent', t => {
  t.truthy(db.agent, 'Agent service should exist')
})

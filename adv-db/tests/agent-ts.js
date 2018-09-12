'use strict'

const test = require('ava')
let db = null

test.beforeEach(async () => {
    const setupDatabase = require('../')
    db = await setupDatabase(db)
})

test('Agent', t => {
    t.truthy(db.agent)
})
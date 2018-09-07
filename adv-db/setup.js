'use strict'

const db = require('./')

async function setup () {

    const config = {
        database: process.env.DB_NAME || 'platziverse',
        username: process.env.DB_USERNAME || 'platzi',
        password: process.env.DB_PASS || '',
        host: process.env.DB_HOST || 'localhost',
        dialect: 'postgres',
        setup: 'true'
    }
    
    await db()
}

setup()
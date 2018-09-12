'use strict'

const db = require('./')
const debug = require('debug')('platziverse:db:setup')
const chalk = require('chalk')
const inquirer = require('inquirer')

const prompt = inquirer.createPromptModule()

async function setup () {
  const answer = await prompt({
    type: 'confirm',
    name: 'setup',
    message: 'this will destroy your database, are you sure?'
  })

  if (!answer.setup){
    return console.log('Nothing happened!')
  }

  const config = {
    database: process.env.DB_NAME || 'platziverse',
    username: process.env.DB_USERNAME || 'platzi',
    password: process.env.DB_PASS || 'platzi',
    host: process.env.DB_HOST || 'localhost',
    dialect: 'postgres',
    logging: s => debug(s),
    setup: 'true'
  }

  await db(config).catch(handlerFatalError)
  console.log('Success!')
  process.exit(0)
}

function handlerFatalError (err) {
  console.error(`${chalk.bgBlackBright('[errorfatal]')} ${chalk.red(err.message)}`)
  console.error(`${chalk.bgBlackBright('[stack]')} ${chalk.yellow(err.stack)}`)
  process.exit(1)
}

setup()

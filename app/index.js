const Telegraf = require('telegraf')

const api = require('./api')
const commands = require('./commands')
const events = require('./events')
const helpers = require('./helpers')
const routines = require('./routines')

function app () {
  const bot = new Telegraf(process.env.BOT_TOKEN)

  api()
  commands(bot)
  routines(bot, helpers)
  events(bot)

  bot.catch(error => {
    console.error('Erro no telegraf\n', error)
  })

  bot.launch()
    .then(() => {
      console.log('TensorFriend funcionando!')
    })
    .catch(error => {
      console.error(error)
    })
}

module.exports = app
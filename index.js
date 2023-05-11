const { Telegraf } = require('telegraf')
require('dotenv').config()

const WORDS = [
   'úplně', 'vyrůstat', 'provoz', 'pěstounská',
   'privatizační', 'ocitnout se', 'výuka', 'začatečnik',
   'samouk', 'mateřtina', 'provoz', 'zápletka',
   'snad', 'pyšný', 'obdiv', 'hrůza',
   'sice', 'chudák', 'obratit list', 'káď',
   'zaujmout', 'rána', 'koktat', 'dodat',
   'odehrávat se', 'přísahat', 'zmást', 'příspěvek',
   'mluvít pravdu', 'řict pravdu do očí', 'lhát', 'kecat',
   'výmluva', 'milosrdná lež', 'lhár/ka', 'planá výmluvá',
   'mluvit nahlas', 'šeptat', 'mlčet', 'úvod',
   'zápletka', 'kolize', 'konflikt', 'obrat',
   'závěr', 'výraz obličeje', 'pohled', 'usmívat se',
   'mračit se', 'kývat', 'upoutat', 'projev', 'řeč',
   'výměna', 'zvednout', 'obočí'
]

function getRandomInt(max) {
   return Math.floor(Math.random() * max);
}


const bot = new Telegraf(process.env.BOT_TOKEN)


bot.command('start', ctx => {
   bot.telegram.sendMessage(ctx.chat.id, "message accept")
   const sendWord = setInterval(async () => {
      let id = getRandomInt(WORDS.length)
      bot.telegram.sendMessage(ctx.chat.id, WORDS[id])
   }, 17 * 60000)
})


bot.launch()
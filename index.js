const Application = require('@waline/vercel');

module.exports = Application({
  async postSave(comment) {
    // do what ever you want after save comment
  },
});

const TelegramBot = require('node-telegram-bot-api');
const token = '1811314527:AAH4H6SAwceSqza3JEwJaZ4yKWJjXdvQWQ0';
const bot = new TelegramBot(token, {polling: true});

bot.on('message', (msg) => {

var Hi = "hi";
if (msg.text.toString().toLowerCase().indexOf(Hi) === 0) {
bot.sendMessage(msg.chat.id,"Hello dear user");
}

});





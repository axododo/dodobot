
const Discord = require('discord.js');
const { fstat } = require('fs');
const { type } = require('os');
const bot = new Discord.Client()
const bdd = require('./bdd.json')
const fs = require('fs')

bot.on('ready', async () =>{
  bot.user.setStatus('online');
  setTimeout(() => {
    bot.user.setActivity('a ne pas jouer', {type : 'LISTENING'});
  },100)

  
})

bot.on('guildMemberAdd', member => {

  bot.channels.cache.get('768766748018343969').send(`et merde un autre gugusse !`);
})

bot.on('ready', function () {
  console.log("Je suis connecté !")
})

bot.on('message', message => {
  if (message.content === 'ATCHOUM !!!') {
    message.channel.send('a t es souhait connard')
  }
  if (message.content === 'bonjour') {
    message.channel.send('bonne nuit')
  }
  if (message.content === 'qui est le meilleur bot') {
    message.channel.send('c est moi')
  }
  if (message.content === 'ntm') {
    message.channel.send('deja ma maman c un kiwi donc respecte stp')
  }
  if (message.content === 'Do') {
    message.channel.send('do')
  }
  if (message.content === 'ping') {
    message.channel.send('pong')
  }
  if (message.content === 'slt') {
    message.channel.send('ta gueule')
  }
  if (message.content === '.') {
    message.channel.send('ca ca veut dire TA GUEULLE !!!')
  }
  if (message.content === 'oui') {
    message.channel.send('non')
  }
  if (message.content === 'nop') {
    message.channel.send('si')
  }
  if (message.content === 'tu te repette') {
    message.channel.send('chut')
  }
  if (message.content === 'po') {
    message.channel.send('rc')
  }
  if (message.content === 'respecte moi') {
    message.channel.send('non')
  }
})

bot.on('message', message => {
  if(message.content.startsWith('clear')) {
    //message.delete();
    if(message.member.hasPermission(781037547278958622)){
      let args = message.content.trim().split(/ +/g);

      if(args[1]){
        if(!isNaN(args[1]) && args[1] >= 1 && args[1] <= 99){
          message.channel.bulkDelete(args[1])
          message.channel.send('les message ont bien etait supprimer')
          message.channel.bulkDelete(1)

        }
        else{
          message.channel.send('il faut indiquer un nombre entre 1 et 99')
        }
      }
      else{

        message.channel.send('il me faut un nombre de messsage a supp')
      }

    }
    else{
      message.channel.send('T PAS MON PERE OK!!!!!')
    }
  }
  if(message.content.startsWith('mb')){
    message.delete()
    if(message.member.hasPermission(781037547278958622)){
      //md bienvenue sur le serv
      if(message.content.length > 5){
        message_bienvenue = message.content.slice(3)
        console.log(message_bienvenue)
        bdd['message-bienvenue'] = message_bienvenue
      }
    }
  }


});

function Savebdd() {
  fs.writeFiles('./bdd.json', JSON.stringify(bdd, null, 4), (err) =>{
    if (err) message.channel.send('une erreur est survenue');
  })
};

bot.login('your_token');

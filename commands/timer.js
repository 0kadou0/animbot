/*const Discord = require('discord.js');
const errors = require('../utilities/errors.js');
const config = require('../config.json');
const ms = require('ms');


module.exports.run = async(client, message, args) =>{
    let tUser = message.mentions.members.first()
    let time = args[1];
    if(!time) return message.channel.send('No time detected, please try again')


    setTimeout(function(){
    tomute.removeRole(muterole.id);
    message.channel.send(`<@${tUser.id}>, The specified time (${time}) has passed. `)
    }, ms(time))
}*/
module.exports.help = {
    name:'timerset'
}
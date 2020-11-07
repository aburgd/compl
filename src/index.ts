import Discord from 'discord.js'
import { onMessage } from './commands'

const client = new Discord.Client()

client.on('ready', () => {
  console.log(client.user.id)
})

client.on('message', message => {
  if (message.content === 'ping') message.channel.send('pong')

  if (message.toString().startsWith('.')) {
    onMessage(message)
  }
})

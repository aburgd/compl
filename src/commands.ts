import { Message, User } from 'discord.js'
import { StaffMember } from './interfaces'
import fs from 'fs'

import 'utils'
import staff from '../server/staff.json'

export function onMessage(message: Message) {
  if (message.toString().substring(0).includes('register')) {

  }
}

function register(msg: Message) {
  const newStaffMember: StaffMember = {
    id: msg.author.id,
    currentNick: (msg.member === null) ? msg.author.username : msg.member.nickname,
    baseName: msg.author.username
  }
  const memberString = JSON.stringify(newStaffMember)
  staff.push(newStaffMember)
} 
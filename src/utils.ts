import { StaffMember, ActivityEvent } from './interfaces'
import { GuildMember } from 'discord.js'

export function newStaffMember(staffUser: GuildMember): StaffMember {
  return {
    id: staffUser.id,
    currentNick: staffUser.nickname,
    baseName: staffUser.user.username
  }
}

export function newActivity(eventMessage: ActivityEvent): ActivityEvent {
  return {
    staffPresent: [],
    usersPresent: [],
    eventName: '',
    eventDate: new Date()
  }
}
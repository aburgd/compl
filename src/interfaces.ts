import { Snowflake, User } from 'discord.js'

export interface StaffMember {
  id: Snowflake
  currentNick: string | null
  baseName: string
}

export interface ActivityEvent {
  staffPresent: StaffMember[]
  usersPresent: User[]
  eventName: string
  eventDate: Date
}
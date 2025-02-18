'use client'

import { createContext, MutableRefObject } from 'react'
import { Chat, ChatMessage, Persona } from './interface'

const ChatContext = createContext<{
  debug?: boolean
  aboutPanelType: string
  DefaultPersonas: Persona[]
  currentChatRef?: MutableRefObject<Chat | undefined>
  chatList: Chat[]
  personas: Persona[]
  isOpenAboutModal?: boolean
  editPersona?: Persona
  aboutModalLoading?: boolean
  openAboutPanel?: boolean
  toggleSidebar?: boolean
  onOpenAboutModal?: () => void
  onCloseAboutModal?: () => void
  setCurrentChat?: (chat: Chat) => void
  onCreatePersona?: (persona: Persona) => void
  onDeleteChat?: (chat: Chat) => void
  onDeletePersona?: (persona: Persona) => void
  onEditPersona?: (persona: Persona) => void
  onCreateChat?: (persona: Persona) => void
  onChangeChat?: (chat: Chat) => void
  saveMessages?: (messages: ChatMessage[]) => void
  onOpenAboutPanel?: (type?: string) => void
  onCloseAboutPanel?: () => void
  onToggleSidebar?: () => void
  forceUpdate?: () => void
}>({
  aboutPanelType: 'chat',
  DefaultPersonas: [],
  chatList: [],
  personas: []
})

export default ChatContext

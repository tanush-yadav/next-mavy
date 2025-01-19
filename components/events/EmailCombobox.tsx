'use client'

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Contact } from '@/lib/data/mockContacts'
import { useState } from 'react'

interface EmailComboboxProps {
  contacts: Contact[]
  inputValue: string
  onInputChange: (value: string) => void
  onSelect: (email: string) => void
  onKeyDown: (e: React.KeyboardEvent<any>) => void
  disabled?: boolean
  inputRef?: React.RefObject<HTMLInputElement>
  selectedEmails?: string[]
}

function getInitials(name: string) {
  const nameMatch = name.match(/^([^<]+)/)
  if (!nameMatch) return 'U'

  const fullName = nameMatch[1].trim()
  const nameParts = fullName.split(' ')
  if (nameParts.length >= 2) {
    return `${nameParts[0][0]}${nameParts[1][0]}`.toUpperCase()
  }
  return nameParts[0][0].toUpperCase()
}

export function EmailCombobox({
  contacts,
  inputValue,
  onInputChange,
  onSelect,
  onKeyDown,
  disabled = false,
  inputRef,
  selectedEmails = [],
}: EmailComboboxProps) {
  const [open, setOpen] = useState(false)

  const filteredContacts = contacts.filter((contact) => {
    const emailMatch = contact.label.match(/<(.+)>/)
    const email = emailMatch ? emailMatch[1] : contact.value

    return (
      contact.label.toLowerCase().includes(inputValue.toLowerCase()) &&
      !selectedEmails.includes(email)
    )
  })

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <input
          ref={inputRef}
          type="email"
          value={inputValue}
          onChange={(e) => onInputChange(e.target.value)}
          onKeyDown={onKeyDown}
          onFocus={() => setOpen(true)}
          className="
            flex-1 bg-transparent
            text-sm text-foreground
            focus:outline-none focus:ring-2
            focus:ring-primary-blue/20
            focus:ring-offset-0
            min-w-[200px]
            placeholder:text-muted-foreground
            transition-all duration-200
          "
          placeholder="Enter email address..."
          disabled={disabled}
        />
      </PopoverTrigger>
      <PopoverContent
        className="w-[356px] p-0 bg-card border border-border shadow-lg rounded-xl"
        align="start"
      >
        <Command className="bg-transparent">
          <CommandInput
            placeholder="Search contacts..."
            value={inputValue}
            onValueChange={onInputChange}
            className="
              border-none focus:ring-0
              placeholder:text-muted-foreground
              transition-colors duration-200
            "
          />
          <CommandList>
            <CommandEmpty className="py-2 text-sm text-muted-foreground">
              No contacts found.
            </CommandEmpty>
            <CommandGroup className="px-2 pb-2">
              <div className="space-y-1">
                {filteredContacts.map((contact) => {
                  const nameMatch = contact.label.match(/^([^<]+)/)
                  const emailMatch = contact.label.match(/<(.+)>/)
                  const name = nameMatch ? nameMatch[1].trim() : ''
                  const email = emailMatch ? emailMatch[1] : contact.value
                  const initials = getInitials(contact.label)

                  return (
                    <CommandItem
                      key={contact.value}
                      value={contact.value}
                      onSelect={(value) => {
                        onSelect(value)
                        setOpen(false)
                      }}
                      className="
                        p-2 rounded-lg
                        transition-all duration-200
                        data-[highlighted]:bg-primary-blue/10
                        dark:data-[highlighted]:bg-primary-blue/20
                        hover:bg-primary-blue/10
                        dark:hover:bg-primary-blue/20
                        hover:scale-[1.02]
                        focus:outline-none
                        focus:ring-2
                        focus:ring-primary-blue/20
                      "
                    >
                      <div className="flex justify-between items-center w-full">
                        <div className="text-foreground/70 dark:text-foreground/80 text-xs font-medium tracking-wide">
                          {name}
                        </div>
                        <div className="flex items-center gap-1.5">
                          <div className="w-5 h-5 relative">
                            <div
                              className="
                              w-5 h-5
                              bg-primary-blue
                              rounded-full
                              flex items-center justify-center
                              transition-transform duration-200
                              group-hover:scale-105
                            "
                            >
                              <span className="text-white text-[10px] font-medium leading-none">
                                {initials}
                              </span>
                            </div>
                          </div>
                          <div className="text-foreground/90 dark:text-foreground/90 text-xs font-medium">
                            {email}
                          </div>
                        </div>
                      </div>
                    </CommandItem>
                  )
                })}
              </div>
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

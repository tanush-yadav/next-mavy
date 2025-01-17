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
import { cn } from '@/lib/utils'
import { Check } from 'lucide-react'
import { useState } from 'react'

interface EmailComboboxProps {
  contacts: Contact[]
  inputValue: string
  onInputChange: (value: string) => void
  onSelect: (email: string) => void
  onKeyDown: (e: React.KeyboardEvent) => void
  disabled?: boolean
  inputRef?: React.RefObject<HTMLInputElement>
}

export function EmailCombobox({
  contacts,
  inputValue,
  onInputChange,
  onSelect,
  onKeyDown,
  disabled = false,
  inputRef,
}: EmailComboboxProps) {
  const [open, setOpen] = useState(false)

  // Filter contacts based on input
  const filteredContacts = contacts.filter((contact) =>
    contact.label.toLowerCase().includes(inputValue.toLowerCase())
  )

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
          className="flex-1 bg-transparent text-sm text-foreground focus:outline-none min-w-[200px]"
          placeholder="Enter email address..."
          disabled={disabled}
        />
      </PopoverTrigger>
      <PopoverContent className="w-[300px] p-0" align="start">
        <Command>
          <CommandInput
            placeholder="Search contacts..."
            value={inputValue}
            onValueChange={onInputChange}
          />
          <CommandList>
            <CommandEmpty>No contacts found.</CommandEmpty>
            <CommandGroup>
              {filteredContacts.map((contact) => (
                <CommandItem
                  key={contact.value}
                  value={contact.value}
                  onSelect={(value) => {
                    onSelect(value)
                    setOpen(false)
                  }}
                >
                  <Check
                    className={cn(
                      'mr-2 h-4 w-4',
                      inputValue === contact.value ? 'opacity-100' : 'opacity-0'
                    )}
                  />
                  {contact.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

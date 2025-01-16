'use client'

import { ArrowLeft, ArrowRight, Command } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

interface EmailData {
  subject: string
  message: string
  cc: string
}

interface EmailTag {
  email: string
  id: string
}

interface EventEmailProps {
  eventType: string
  emailData: EmailData
  onBack: () => void
}

export function EventEmail({ eventType, emailData, onBack }: EventEmailProps) {
  const [emailTags, setEmailTags] = useState<EmailTag[]>([])
  const [inputValue, setInputValue] = useState('')

  // Add CC as an editable field
  const [ccValue, setCcValue] = useState(emailData.cc)

  const [step, setStep] = useState<'initial' | 'compose' | 'message' | 'final'>(
    'initial'
  )
  const [subject, setSubject] = useState(emailData.subject)
  const [message, setMessage] = useState(emailData.message)

  /* Refs for auto-focus */
  const toInputRef = useRef<HTMLInputElement>(null)
  const ccInputRef = useRef<HTMLInputElement>(null)
  const subjectRef = useRef<HTMLInputElement>(null)
  const messageRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    // Auto-focus logic based on current step:
    if (step === 'initial') {
      toInputRef.current?.focus()
    } else if (step === 'compose') {
      // Focus CC field at the end of the current value
      ccInputRef.current?.focus()
      // Place caret at the end of prefilled text
      setTimeout(() => {
        ccInputRef.current?.setSelectionRange(ccValue.length, ccValue.length)
      }, 0)
    } else if (step === 'message') {
      subjectRef.current?.focus()
    }
  }, [step, ccValue.length])

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
        // Handle send email with CMD/CTRL + Enter
        console.log('Sending email (CMD+Enter)...')
      }
    }
    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [])

  // Prevent going to the next step if required fields are empty:
  const canGoNext = () => {
    switch (step) {
      case 'initial':
        // Must have at least one "To" email
        return emailTags.length > 0
      case 'compose':
        // Must have CC filled
        return ccValue.trim().length > 0
      case 'message':
        // Must have subject and message
        return subject.trim().length > 0 && message.trim().length > 0
      default:
        return true
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && inputValue.trim()) {
      e.preventDefault()
      const newTag: EmailTag = {
        email: inputValue.trim(),
        id: Math.random().toString(36).substr(2, 9),
      }
      setEmailTags([...emailTags, newTag])
      setInputValue('')
      // Move to next step automatically, or require manual "Next" – up to you:
      setStep('compose')
    }
  }

  const removeTag = (id: string) => {
    setEmailTags(emailTags.filter((tag) => tag.id !== id))
  }

  const handleNext = () => {
    if (!canGoNext()) return // Just double-check
    if (step === 'initial') {
      setStep('compose')
    } else if (step === 'compose') {
      setStep('message')
    } else if (step === 'message') {
      setStep('final')
    }
  }

  const handleBack = () => {
    if (step === 'final') {
      setStep('message')
    } else if (step === 'message') {
      setStep('compose')
    } else if (step === 'compose') {
      setStep('initial')
    } else {
      onBack()
    }
  }

  const getProgressWidth = () => {
    switch (step) {
      case 'initial':
        return 'w-[138px]'
      case 'compose':
        return 'w-[312px]'
      case 'message':
        return 'w-[378px]'
      case 'final':
        return 'w-[512px]'
      default:
        return 'w-[138px]'
    }
  }

  const getHeading = () => {
    switch (step) {
      case 'initial':
        return 'Who do you want to meet?'
      case 'compose':
        return 'Just CC Mavy'
      case 'message':
        return "What's it about?"
      case 'final':
        return 'Hit Send! 🚀'
      default:
        return 'Who do you want to meet?'
    }
  }

  return (
    <div className="bg-card rounded-xl p-7 shadow-[0_4px_20px_rgba(0,0,0,0.05)] h-full">
      {/* Top Navigation (Hide at final) */}
      {step !== 'final' && (
        <div className="flex justify-between items-center mb-6">
          <button
            onClick={handleBack}
            className="flex items-center gap-2 text-foreground/60 hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="text-sm">Back</span>
          </button>
          {step !== 'message' && (
            <button
              onClick={handleNext}
              disabled={!canGoNext()}
              className="flex items-center gap-2 text-foreground/60 hover:text-foreground transition-colors disabled:opacity-50"
            >
              <span className="text-sm">Next</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          )}
        </div>
      )}

      <div className="text-foreground/50 text-base font-medium">
        Getting started with Mavy
      </div>
      <h1 className="text-foreground/90 text-2xl font-semibold mt-2 font-crimson tracking-tight">
        {getHeading()}
      </h1>

      {/* Progress Bar */}
      <div className="mt-4 relative h-2">
        <div className="w-full h-2 bg-foreground/10 opacity-50 rounded-[49px]" />
        <div
          className={`h-2 absolute top-0 left-0 bg-[#1ac06b] rounded-[49px] transition-all duration-300 ${getProgressWidth()}`}
        />
      </div>

      {/* Email Form */}
      <div className="mt-[18px] px-4 py-3 bg-neutral-100 dark:bg-neutral-900 rounded-lg border border-white/10">
        {/* To Field */}
        <div className="flex items-center gap-[18px] mb-3">
          <div className="text-foreground/60 text-sm">To</div>
          <div className="flex-1 flex flex-wrap gap-2">
            {emailTags.map((tag) => (
              <div
                key={tag.id}
                className="flex items-center gap-1 bg-primary-blue/10 dark:bg-primary-blue/20 px-2 py-1 rounded-md"
              >
                <span className="text-sm text-foreground">{tag.email}</span>
                <button
                  onClick={() => removeTag(tag.id)}
                  className="text-foreground/60 hover:text-foreground"
                >
                  ×
                </button>
              </div>
            ))}
            <input
              ref={toInputRef}
              type="email"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent text-sm text-foreground focus:outline-none min-w-[200px]"
              placeholder="Enter email addresses"
              readOnly={step === 'final'}
            />
          </div>
        </div>

        {/* CC Field (Now an editable input) */}
        <div className="flex items-center gap-3 mb-3">
          <div className="text-foreground/60 text-sm">CC</div>
          <input
            ref={ccInputRef}
            type="text"
            className="flex-1 bg-transparent text-sm text-foreground focus:outline-none"
            value={ccValue}
            onChange={(e) => setCcValue(e.target.value)}
            readOnly={step === 'final'}
          />
        </div>

        {/* Subject Field */}
        <div className="py-1 mb-3">
          <input
            ref={subjectRef}
            type="text"
            className="w-full bg-transparent text-sm text-foreground focus:outline-none font-medium"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Subject"
            readOnly={step === 'final'}
          />
        </div>

        {/* Message Field */}
        <div className="h-[209px]">
          <textarea
            ref={messageRef}
            className="w-full h-full bg-transparent text-sm text-foreground focus:outline-none resize-none"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write your message"
            readOnly={step === 'final'}
          />
        </div>
      </div>

      {/* Send Email Button + Keyboard Shortcut */}
      <div className="mt-6 flex flex-col items-center gap-3">
        <button
          disabled={!canGoNext()}
          onClick={() =>
            step !== 'final' ? handleNext() : console.log('Sending email...')
          }
          className="
            w-[248px]
            py-3
            px-6
            bg-foreground
            dark:bg-background
            text-background
            dark:text-foreground
            rounded-full
            font-semibold
            transition-all
            duration-200
            border
            border-primary-blue
            shadow-[0px_0px_4px_4px_rgba(255,255,255,0.15)]
            hover:opacity-90
            flex
            items-center
            justify-center
            gap-2
            disabled:opacity-50
          "
        >
          <span>{step !== 'final' ? 'Next' : 'Send email'}</span>
        </button>

        {step === 'final' && (
          <div className="flex items-center gap-2 text-xs">
            <span className="text-foreground/70 font-medium">hit</span>
            <div className="flex items-center gap-1">
              <kbd className="px-1 py-0.5 bg-[#e9e9e9] dark:bg-neutral-800 rounded">
                <Command className="h-3 w-3" />
              </kbd>
              <kbd className="px-1 py-0.5 bg-[#e9e9e9] dark:bg-neutral-800 rounded text-[#4d4d4d] dark:text-neutral-400 font-medium">
                enter
              </kbd>
            </div>
            <span className="text-foreground/70 font-medium">to send</span>
          </div>
        )}
      </div>
    </div>
  )
}

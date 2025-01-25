'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function SignUpPage() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const router = useRouter()

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option)
  }

  const handleContinue = () => {
    router.push('/dashboard')
  }

  const handleSkip = () => {
    router.push('/dashboard')
  }

  return (
    <div className="min-h-screen w-full relative bg-black overflow-hidden">
      {/* Background image and overlay */}
      <div className="absolute inset-0">
        <Image
          src="/login-contacts.png"
          alt="Office workspace with sunset view"
          fill
          priority
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-white/10 backdrop-blur-[15px]" />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen gap-4 px-4">
        <div className="w-full max-w-[800px] h-[361px] relative bg-black/80 rounded-[40px] backdrop-blur-md overflow-hidden">
          {/* Logo section */}
          <div className="absolute left-[8%] top-8 flex items-center gap-1">
            <Image
              src="/mavex.png"
              alt="Mavex logo"
              width={34}
              height={36}
              className="object-contain"
            />
          </div>

          {/* Content wrapper for better responsiveness */}
          <div className="flex flex-col gap-24 lg:flex-row h-full pt-24 px-[8%]">
            {/* Question text */}
            <div className="lg:w-[40%]">
              <span className="text-white text-[32px] font-crimson leading-[40px]">
                What defines <br />
                you best?
              </span>
            </div>

            {/* Selection buttons grid */}
            <div className="lg:w-[60%] h-[72%] grid grid-cols-2 gap-x-4 mt-8 lg:mt-0">
              {[
                'Sales',
                'Marketing',
                'Recruitment',
                'Founder',
                'Tech',
                'Student',
              ].map((label) => (
                <button
                  key={label}
                  onClick={() => handleOptionSelect(label)}
                  className={`min-w-fit px-6 h-10 py-2 bg-black/40 rounded-xl border
                    ${selectedOption === label ? 'border-white' : 'border-white/20'}
                    backdrop-blur-sm hover:border-white/40 transition-all duration-200
                    flex items-center justify-center`}
                >
                  <span className="text-white/70 text-sm font-medium whitespace-nowrap">
                    {label}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Continue button */}
          {selectedOption && (
            <div className="absolute left-[8%] bottom-[100px]">
              <button
                onClick={handleContinue}
                className="w-[158px] h-11 px-6 py-3 bg-white rounded-[52px]
                       shadow-[0px_0px_4px_4px_rgba(255,255,255,0.15)]
                       flex justify-center items-center transition-transform hover:scale-[1.02]"
              >
              <span className="text-sm font-semibold leading-tight bg-gradient-to-r from-foreground to-primary-blue bg-clip-text text-transparent opacity-90">
                  continue
                </span>
              </button>
            </div>
          )}
        </div>

        {/* Skip button */}
        <button
          onClick={handleSkip}
          className="absolute bottom-10 left-0 w-full group"
        >
          <div
            className="flex items-center justify-center gap-2 text-white/50 text-sm font-medium
                        group-hover:text-white/70 transition-colors duration-200"
          >
            Skip <span>-></span>
          </div>
        </button>
      </div>
    </div>
  )
}

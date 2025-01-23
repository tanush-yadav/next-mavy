import { GoogleIcon } from '@/components/icons/GoogleIcon'
import { OutlookIcon } from '@/components/icons/OutlookIcon'
import { AnimatedCards } from '@/components/sign-up/AnimatedCards'
import Image from 'next/image'

export default function PickAModePage() {
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
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen gap-4">
        {/* Sign up card */}
        <div className="w-[695px] h-[361px] relative bg-black/80 rounded-[40px] opacity-90 overflow-hidden">
          <div className="w-[284px] left-[64px] top-[121px] absolute">
            <span className="text-white text-[32px] font-semibold font-crimson leading-10">
              Sign up <br />
            </span>
            <span className="text-white/40 text-[32px] font-semibold font-crimson leading-10">
              to experience Scheduling Nirvana
            </span>
          </div>
          <div className="left-[428px] top-[141px] absolute flex-col justify-start items-start gap-4 inline-flex">
            <button className="self-stretch px-6 py-2 bg-white rounded-xl shadow-[0px_1px_1px_0px_rgba(0,0,0,0.17)] justify-center items-center gap-2.5 inline-flex overflow-hidden">
              <GoogleIcon className="w-6 h-6" />
              <div className="text-black text-sm font-medium font-sans">
                Sign in with Google
              </div>
            </button>
            <button className="self-stretch px-4 py-2 bg-white rounded-xl shadow-[0px_1px_1px_0px_rgba(0,0,0,0.17)] justify-center items-center gap-2.5 inline-flex overflow-hidden">
              <OutlookIcon className="w-6 h-6" />
              <div className="text-black text-sm font-medium font-sans">
                Sign in with Outlook
              </div>
            </button>
          </div>
          <div className="left-[489px] top-[104px] absolute opacity-70 text-white text-sm font-medium font-sans">
            Pick a mode
          </div>
          <div className="left-[64px] top-[29px] absolute justify-start items-center gap-1 inline-flex">
            <div className="w-8 h-[29px] relative">
              <img
                className="w-[34px] h-9 left-[-2px] top-[-4px] absolute"
                src="/mavex.png"
                alt="Mavex logo"
                width={34}
                height={36}
              />
            </div>
            {/* <div className="text-white/90 text-base font-semibold leading-normal">
              Mavex
            </div> */}
          </div>
        </div>

        {/* Animated cards */}
        <div className="absolute bottom-10 left-0 w-full overflow-hidden">
          <div className="px-7">
            <AnimatedCards />
          </div>
        </div>
      </div>
    </div>
  )
}

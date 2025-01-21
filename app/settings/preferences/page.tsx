import { DownArrow } from '@/components/icons/DownArrow'

const PreferencesPage = () => {
  return (
    <div className="w-full min-h-screen bg-[#f6f6f6]">
      <div className="max-w-2xl mx-auto pt-2 px-6">
        <div className="text-2xl font-medium text-[#101010] mb-6">
          Preferences
        </div>

        {/* Main content area with scroll */}
        <div className="space-y-4 pb-6 max-h-[calc(100vh-120px)] overflow-y-auto">
          {/* Duration div */}
          <div className="space-y-2 py-2">
            <div className="text-sm font-medium text-black/50 uppercase tracking-wide">
              Duration
            </div>
            <div className="space-y-3 py-2">
              <div className="h-fill w-full p-4 bg-white rounded-xl justify-between items-center inline-flex">
                <div className="opacity-90 text-[#101010] text-base font-medium leading-tight">
                  In-Person meeting
                </div>
                <div className="justify-start items-start gap-1 flex">
                  <div className="opacity-90 text-[#101010] text-sm font-medium leading-tight">
                    30 min
                  </div>
                  <DownArrow className="w-5 h-5" />
                </div>
              </div>

              <div className="h-full w-full p-4 bg-white rounded-xl justify-between items-center inline-flex">
                <div className="opacity-90 text-[#101010] text-base font-medium leading-tight">
                  Virtual meeting
                </div>
                <div className="justify-start items-start gap-1 flex">
                  <div className="opacity-90 text-[#101010] text-sm font-medium leading-tight">
                    30 min
                  </div>
                  <DownArrow className="w-5 h-5" />
                </div>
              </div>

              <div className="h-full w-full p-4 bg-white rounded-xl justify-between items-center inline-flex">
                <div className="opacity-90 text-[#101010] text-base font-medium leading-tight">
                  Buffer between virtual meetings
                </div>
                <div className="justify-start items-start gap-1 flex">
                  <div className="opacity-90 text-[#101010] text-sm font-medium leading-tight">
                    None
                  </div>
                  <DownArrow className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>

          {/* Follow-up Settings div */}
          <div className="space-y-2 py-2">
            <div className="text-sm font-medium text-black/50 uppercase tracking-wide">
              Follow-up settings
            </div>
            <div className="space-y-3 py-2">
              <div className="h-full w-full p-4 bg-white rounded-xl justify-between items-center inline-flex">
                <div className="opacity-90 text-[#101010] text-base font-medium leading-tight">
                  Email
                </div>
                <div className="w-11 h-6 p-0.5 bg-[#f6f6f6] rounded-[44px] justify-end items-center gap-2 inline-flex">
                  <div className="w-5 h-5 bg-[#16a570] rounded-full shadow-[0px_0px_10.199999809265137px_0px_rgba(27,193,108,0.37)]" />
                </div>
              </div>

              <div className="h-full w-full p-4 bg-white rounded-xl justify-between items-center inline-flex">
                <div className="opacity-90 text-[#101010] text-base font-medium leading-tight">
                  Frequency
                </div>
                <div className="justify-start items-center gap-1 flex">
                  <div className="opacity-90 text-[#101010] text-sm font-medium leading-tight">
                    Every two days
                  </div>
                  <DownArrow className="w-5 h-5" />
                </div>
              </div>

              <div className="h-full w-full p-4 bg-white rounded-xl justify-between items-center inline-flex">
                <div className="opacity-90 text-[#101010] text-base font-medium leading-tight">
                  Limit
                </div>
                <div className="justify-start items-center gap-1 flex">
                  <div className="opacity-90 text-[#101010] text-sm font-medium leading-tight">
                    Twice
                  </div>
                  <DownArrow className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>

          {/* Reminder div */}
          <div className="space-y-2 py-2">
            <div className="text-sm font-medium text-black/50 uppercase tracking-wide">
              Reminder
            </div>
            <div className="space-y-3 py-2">
              <div className="h-full w-full p-4 bg-white rounded-xl justify-between items-center inline-flex">
                <div className="opacity-90 text-[#101010] text-base font-medium leading-tight">
                  Email
                </div>
                <div className="w-11 h-6 p-0.5 bg-[#f6f6f6] rounded-[44px] justify-end items-center gap-2 inline-flex">
                  <div className="w-5 h-5 bg-[#16a570] rounded-full shadow-[0px_0px_10.199999809265137px_0px_rgba(27,193,108,0.37)]" />
                </div>
              </div>

              <div className="h-full w-full p-4 bg-white rounded-xl justify-between items-center inline-flex">
                <div className="opacity-90 text-[#101010] text-base font-medium leading-tight">
                  Time
                </div>
                <div className="justify-start items-center gap-1 flex">
                  <div className="opacity-90 text-[#101010] text-sm font-medium leading-tight">
                    10 min
                  </div>
                  <DownArrow className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PreferencesPage

import { GoogleIcon } from '@/components/icons/GoogleIcon'
import { MailIcon } from '@/components/icons/MailIcon'
import { OutlookIcon } from '@/components/icons/OutlookIcon'
export default function IntegrationsPage() {
  return (
    <div className="w-full min-h-full bg-background px-6">
      <div className="max-w-2xl mx-auto">
        <div className="h-[442px] px-8 py-6 bg-card rounded-3xl flex flex-col gap-6">
          {/* Header */}
          <div className="text-foreground/90 text-2xl font-semibold font-crimson leading-normal">
            Integrations
          </div>

          {/* Divider */}
          <div className="h-px bg-muted" />

          {/* Connected Calendars */}
          <div className="flex flex-col gap-2">
            <div className="text-foreground/60 text-xs font-medium font-geist uppercase leading-loose">
              Connected calendars
            </div>
            <div className="p-4 bg-muted rounded-xl flex items-start gap-6">
              <div className="p-1 bg-neutral-100 rounded-lg">
                <GoogleIcon width={40} height={40} />
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-foreground/90 text-sm font-medium font-geist leading-tight">
                  Shubham Ranga
                </div>
                <div className="text-foreground/60 text-sm font-medium font-geist leading-tight">
                  shubhamranga@gmail.com
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-muted" />

          {/* Add Another Account */}
          <div className="flex flex-col gap-2">
            <div className="text-foreground/60 text-xs font-medium font-geist uppercase leading-loose">
              Add another account
            </div>
            <div className="grid grid-cols-2 gap-4">
              <button className="px-4 py-3 bg-muted rounded-lg flex items-center gap-3">
                <GoogleIcon width={24} height={24} />
                <span className="opacity-90 text-foreground/90 text-sm font-medium font-geist leading-tight">
                  Connect with google
                </span>
              </button>

              <button className="px-4 py-3 bg-muted rounded-lg flex items-center gap-3">
                <OutlookIcon className="w-6 h-6" />
                <span className="opacity-90 text-foreground/90 text-sm font-medium font-geist leading-tight">
                  Connect with outlook
                </span>
              </button>

              <button className="px-4 py-3 bg-muted rounded-lg flex items-center gap-3">
                <MailIcon className="w-6 h-6" />
                <span className="opacity-90 text-foreground/90 text-sm font-medium font-geist leading-tight">
                  Connect with email
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

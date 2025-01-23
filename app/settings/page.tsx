import Availability from './availability/page'
import Integrations from './integrations/page'
import Location from './locations/page'
import Preferences from './preferences/page'

export default function SettingsPage() {
  return (
    <div className="flex flex-col gap-6 overflow-y-auto">
      <Preferences />
      <Availability />
      <Location />
      <Integrations />
    </div>
  )
}

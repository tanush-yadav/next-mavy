import { redirect } from 'next/navigation'

export default function Dashboard() {
  redirect('/sign-up/pick-a-mode')
  return null
}

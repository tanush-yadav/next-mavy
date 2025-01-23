import { redirect } from 'next/navigation'

export default function SignUpPage() {
  redirect('/sign-up/pick-a-mode')
  return null
}

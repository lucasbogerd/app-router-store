import { UserButton } from "@clerk/nextjs"

export default function TestPage() {
  return (
    <div>
      <UserButton afterSignOutUrl="/" />
    </div>
  )
}

"use client"

import { useUser } from "@clerk/nextjs"
import { UserButton } from "@clerk/nextjs"

export function NavUser() {
  const session = useUser()

  return (
    <div className="flex flex-row items-center space-x-4">
      <span>
        {session.user?.fullName ??
          session.user?.emailAddresses[0]?.emailAddress ??
          null}
      </span>
      <UserButton />
    </div>
  )
}

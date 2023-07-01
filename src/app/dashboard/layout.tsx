import Image from "next/image"
import { storeConfig } from "../../../store.config"
import { UserButton } from "@clerk/nextjs"

export const metadata = {
  title: `${storeConfig.storeName} | Admin}`,
  description: `Manage your store's products, orders, and more.`,
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      <nav className="flex flex-row justify-between border-b py-1 px-6">
        <div className="flex flex-row font-bold items-center space-x-4">
          <Image
            alt="store logo"
            src={storeConfig.svgIcon}
            width={50}
            height={50}
          />
          <h2>{storeConfig.storeName}</h2>
        </div>
        <div className="flex flex-row items-center">
          <UserButton />
        </div>
      </nav>
      {children}
    </section>
  )
}

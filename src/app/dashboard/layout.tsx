import Image from "next/image"
import { storeConfig } from "../../../store.config"
import { NavUser } from "~/components/dashboard/NavUser"
import Link from "next/link"

export const metadata = {
  title: `${storeConfig.storeName} | Admin`,
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
        <Link
          href={"/dashboard"}
          className="flex flex-row items-center space-x-4 group"
        >
          <Image
            alt="store logo"
            src={storeConfig.svgIcon}
            width={50}
            height={50}
          />
          <div className="text-lg flex flex-row space-x-1">
            <h2 className="font-bold">{storeConfig.storeName}</h2>
            <span>|</span>
            <span className="font-normal">admin</span>
          </div>
        </Link>
        <NavUser />
      </nav>
      {children}
    </section>
  )
}

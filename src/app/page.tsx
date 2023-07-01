import Image from "next/image"
import { ProductsOverview } from "~/components/ProductsOverview"
import { CreateNewProductButton, MigrationsButton } from "~/components/Test"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <MigrationsButton /> */}
      <CreateNewProductButton />
      <ProductsOverview />
    </main>
  )
}

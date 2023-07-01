"use client"

import { useRouter } from "next/navigation"
import { useTransition } from "react"
import { addRandomProduct, deleteAllProducts } from "~/actions/product-actions"
import { runAllMigrations } from "~/actions/run-migration"

export async function MigrationsButton() {
  const [isPending, startTransition] = useTransition()

  return (
    <button
      onClick={() => startTransition(() => runAllMigrations())}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Run migrations
    </button>
  )
}

export function CreateNewProductButton() {
  let [isPending, startTransition] = useTransition()

  const router = useRouter()

  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={() =>
        startTransition(() => {
          addRandomProduct()
          router.refresh()
        })
      }
    >
      Create new product
    </button>
  )
}

export function DeleteAllProductsButton() {
  let [isPending, startTransition] = useTransition()

  const router = useRouter()

  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={() =>
        startTransition(() => {
          deleteAllProducts()
          router.refresh()
        })
      }
    >
      Delete all products
    </button>
  )
}

// export async function ProductsOverview() {
// 	const [isPending, startTransition] = useTransition()

// 	return (
// 		<button
// 			onClick={() => startTransition(() => get())}
// }

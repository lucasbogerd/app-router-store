"use server"

import { products } from "~/db/schema"
import { getDb } from "./get-db"
import { useRouter } from "next/router"

export async function addRandomProduct() {
  const db = await getDb()

  const product = await db.insert(products).values({
    // generate random product name
    name: `Product ${(Math.random() + 1).toString(36).substring(7)}`,
    price: Math.random() * 100,
  })

  console.debug("Added product, query result: /n", product)
}

export async function getAllProducts() {
  const db = await getDb()

  const allProducts = await db
    .select({
      name: products.name,
      price: products.price,
    })
    .from(products)

  return allProducts
}

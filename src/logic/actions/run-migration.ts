"use server"

import { migrate } from "drizzle-orm/planetscale-serverless/migrator"
import { getDb } from "./get-db"

export async function runAllMigrations() {
  const db = await getDb()

  console.debug("Running migrations...")

  await migrate(db, { migrationsFolder: "./src/db/migrations" })
}

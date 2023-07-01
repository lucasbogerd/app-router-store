"use server"

import { connect } from "@planetscale/database"
import { drizzle } from "drizzle-orm/planetscale-serverless"

export async function getDb() {
  const connection = connect({
    host: process.env.DATABASE_HOST,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
  })

  return drizzle(connection)
}

import { sql } from "drizzle-orm"
import {
  datetime,
  int,
  mysqlTable,
  serial,
  uniqueIndex,
  varchar,
} from "drizzle-orm/mysql-core"

export const products = mysqlTable(
  "products",
  {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 255 }),
    price: int("price"),
    createdAt: datetime("created_at").default(sql`CURRENT_TIMESTAMP`),
  },
  (products) => {
    return {
      nameIndex: uniqueIndex("name_idx").on(products.name),
    }
  }
)

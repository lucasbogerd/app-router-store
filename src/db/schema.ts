import { sql } from "drizzle-orm"
import {
  datetime,
  int,
  mysqlTable,
  serial,
  text,
  uniqueIndex,
  varchar,
} from "drizzle-orm/mysql-core"

export const products = mysqlTable(
  "products",
  {
    id: text("cuid")
      .primaryKey()
      .default(sql`cuid()`),
    name: varchar("name", { length: 255 }).notNull(),
    price: int("price"),
    createdAt: datetime("created_at").default(sql`CURRENT_TIMESTAMP`),
  },
  (products) => {
    return {
      nameIndex: uniqueIndex("name_idx").on(products.name),
    }
  }
)

export const productVariants = mysqlTable("product_variants", {
  id: text("cuid")
    .default(sql`cuid()`)
    .primaryKey(),
  productId: text("cuid").notNull(),
  name: varchar("name", { length: 255 }).notNull(),
  price: int("price"),
  createdAt: datetime("created_at").default(sql`CURRENT_TIMESTAMP`),
})

export const customers = mysqlTable("customers", {
  id: text("cuid")
    .default(sql`cuid()`)
    .primaryKey(),
  firstName: varchar("first_name", { length: 255 }).notNull(),
  lastName: varchar("last_name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  phone: varchar("phone", { length: 255 }).notNull(),
  createdAt: datetime("created_at").default(sql`CURRENT_TIMESTAMP`),
})

export const addresses = mysqlTable("addresses", {
  id: text("cuid")
    .default(sql`cuid()`)
    .primaryKey(),
  street: varchar("street", { length: 255 }).notNull(),
  houseNumber: varchar("house_number", { length: 255 }).notNull(),
  postalCode: varchar("postal_code", { length: 255 }).notNull(),
  city: varchar("city", { length: 255 }).notNull(),
  country: varchar("country", { length: 255 }).notNull(),
  createdAt: datetime("created_at").default(sql`CURRENT_TIMESTAMP`),
})

export const customer_addresses = mysqlTable("customer_addresses", {
  id: text("cuid")
    .default(sql`cuid()`)
    .primaryKey(),
  customerId: text("cuid").notNull(),
  addressId: text("cuid").notNull(),
  createdAt: datetime("created_at").default(sql`CURRENT_TIMESTAMP`),
})

export const categories = mysqlTable("categories", {
  id: text("cuid")
    .default(sql`cuid()`)
    .primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  createdAt: datetime("created_at").default(sql`CURRENT_TIMESTAMP`),
})

export const product_categories = mysqlTable("product_categories", {
  id: text("cuid")
    .default(sql`cuid()`)
    .primaryKey(),
  productId: text("cuid").notNull(),
  categoryId: text("cuid").notNull(),
  createdAt: datetime("created_at").default(sql`CURRENT_TIMESTAMP`),
})

export const orders = mysqlTable("orders", {
  id: text("cuid")
    .default(sql`cuid()`)
    .primaryKey(),
  userId: int("user_id").notNull(),
  createdAt: datetime("created_at").default(sql`CURRENT_TIMESTAMP`),
})

export const orderItems = mysqlTable("order_items", {
  id: text("cuid")
    .default(sql`cuid()`)
    .primaryKey(),
  orderId: int("order_id").notNull(),
  productVariantId: int("product_variant_id").notNull(),
  quantity: int("quantity").notNull(),
  createdAt: datetime("created_at").default(sql`CURRENT_TIMESTAMP`),
})

export const orderStatuses = mysqlTable("order_statuses", {
  id: text("cuid")
    .default(sql`cuid()`)
    .primaryKey(),
  orderId: int("order_id").notNull(),
  status: varchar("status", { length: 255 }).notNull(),
  createdAt: datetime("created_at").default(sql`CURRENT_TIMESTAMP`),
})

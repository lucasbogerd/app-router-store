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
    id: serial("id").primaryKey(),
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
  id: serial("id").primaryKey(),
  productId: int("product_id"),
  name: varchar("name", { length: 255 }).notNull(),
  price: int("price"),
  createdAt: datetime("created_at").default(sql`CURRENT_TIMESTAMP`),
})

export const users = mysqlTable("customers", {
  id: serial("id").primaryKey(),
  firstName: varchar("first_name", { length: 255 }).notNull(),
  lastName: varchar("last_name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  phone: varchar("phone", { length: 255 }).notNull(),
  createdAt: datetime("created_at").default(sql`CURRENT_TIMESTAMP`),
})

export const addresses = mysqlTable("addresses", {
  id: serial("id").primaryKey(),
  street: varchar("street", { length: 255 }).notNull(),
  houseNumber: varchar("house_number", { length: 255 }).notNull(),
  postalCode: varchar("postal_code", { length: 255 }).notNull(),
  city: varchar("city", { length: 255 }).notNull(),
  country: varchar("country", { length: 255 }).notNull(),
  createdAt: datetime("created_at").default(sql`CURRENT_TIMESTAMP`),
})

export const customer_addresses = mysqlTable("customer_addresses", {
  id: serial("id").primaryKey(),
  customerId: int("customer_id").notNull(),
  addressId: int("address_id").notNull(),
  createdAt: datetime("created_at").default(sql`CURRENT_TIMESTAMP`),
})

export const categories = mysqlTable("categories", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  createdAt: datetime("created_at").default(sql`CURRENT_TIMESTAMP`),
})

export const product_categories = mysqlTable("product_categories", {
  id: serial("id").primaryKey(),
  productId: int("product_id").notNull(),
  categoryId: int("category_id").notNull(),
  createdAt: datetime("created_at").default(sql`CURRENT_TIMESTAMP`),
})

export const orders = mysqlTable("orders", {
  id: serial("id").primaryKey(),
  userId: int("user_id").notNull(),
  createdAt: datetime("created_at").default(sql`CURRENT_TIMESTAMP`),
})

export const orderItems = mysqlTable("order_items", {
  id: serial("id").primaryKey(),
  orderId: int("order_id").notNull(),
  productVariantId: int("product_variant_id").notNull(),
  quantity: int("quantity").notNull(),
  createdAt: datetime("created_at").default(sql`CURRENT_TIMESTAMP`),
})

export const orderStatuses = mysqlTable("order_statuses", {
  id: serial("id").primaryKey(),
  orderId: int("order_id").notNull(),
  status: varchar("status", { length: 255 }).notNull(),
  createdAt: datetime("created_at").default(sql`CURRENT_TIMESTAMP`),
})

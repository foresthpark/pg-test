import { pgTable, index, serial, varchar, timestamp, pgSequence } from "drizzle-orm/pg-core"
  import { sql } from "drizzle-orm"


export const clerkFujiSoocPostIdSeq = pgSequence("clerk-fuji-sooc_post_id_seq", {  startWith: "1", increment: "1", minValue: "1", maxValue: "2147483647", cache: "1", cycle: false })
export const invoiceGeneratorInvoiceIdSeq = pgSequence("invoice-generator_invoice_id_seq", {  startWith: "1", increment: "1", minValue: "1", maxValue: "2147483647", cache: "1", cycle: false })
export const invoiceGeneratorServiceIdSeq = pgSequence("invoice-generator_service_id_seq", {  startWith: "1", increment: "1", minValue: "1", maxValue: "2147483647", cache: "1", cycle: false })
export const clerkFujiSoocCommentIdSeq = pgSequence("clerk-fuji-sooc_comment_id_seq", {  startWith: "1", increment: "1", minValue: "1", maxValue: "2147483647", cache: "1", cycle: false })


export const pgTestPost = pgTable("pg-test_post", {
	id: serial("id").primaryKey().notNull(),
	name: varchar("name", { length: 256 }),
	createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
	updatedAt: timestamp("updated_at", { withTimezone: true, mode: 'string' }),
},
(table) => {
	return {
		nameIdx: index("name_idx").using("btree", table.name.asc().nullsLast()),
	}
});
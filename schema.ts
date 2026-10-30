import { pgTable, text, integer, timestamp } from "drizzle-orm/pg-core";

export const quotas = pgTable("quotas", {
  uid: text().primaryKey(),
  email: text(),
  used: integer().notNull().default(0),
  windowStart: timestamp("window_start", { withTimezone: true }).notNull().defaultNow(),
});

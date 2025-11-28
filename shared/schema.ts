import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id")
    .primaryKey()
    .default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export interface Tree {
  id: number;
  name: string;
  scientificName: string;
  description: string;
  habitat: string;
  height: string;
  lifespan: string;
  characteristics: string[];
  imageUrl: string;
  audioUrl?: string;
  signLanguageVideoUrl?: string;
}

export interface Question {
  id: number;
  treeId: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface QuizResult {
  treeId: number;
  score: number;
  totalQuestions: number;
  passed: boolean;
}

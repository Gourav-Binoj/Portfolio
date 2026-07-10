import { pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

export const knowledgeChunks = pgTable('knowledge_chunks', {
  id: serial('id').primaryKey(),
  content: text('content').notNull(),
  source: text('source'),
  createdAt: timestamp('createdAt').defaultNow(),
});

export const chatSessions = pgTable('chat_sessions', {
  id: serial('id').primaryKey(),
  sessionId: text('sessionId').notNull().unique(),
  createdAt: timestamp('createdAt').defaultNow(),
  updatedAt: timestamp('updatedAt').defaultNow(),
});

export const chatMessages = pgTable('chat_messages', {
  id: serial('id').primaryKey(),
  sessionId: text('sessionId').notNull(),
  role: text('role').notNull(),
  content: text('content').notNull(),
  createdAt: timestamp('createdAt').defaultNow(),
});

---
name: learn-stack
description: Teaches NestJS, Prisma, and PostgreSQL concepts while coding. Use when working with controllers, services, database queries, migrations, schema changes, DTOs, or when the user asks to learn or understand something about the backend stack.
---

# Learning Mode: NestJS + Prisma + PostgreSQL

## Purpose

Teach backend development concepts in context while working on the TFE project. Don't just write code - explain the reasoning and help build understanding.

## Teaching Guidelines

### 1. Explain the WHY
- Don't just write code, explain the reasoning behind decisions
- Connect new concepts to things the user already knows
- Use analogies to make abstract concepts concrete

### 2. Show Alternatives
- Mention other valid approaches and their trade-offs
- Explain when you'd choose one pattern over another
- Compare NestJS patterns to vanilla Express when helpful

### 3. Highlight Common Mistakes
- Warn about gotchas before they happen
- Explain N+1 queries, circular dependencies, etc.
- Show the wrong way briefly, then the right way

### 4. Build Mental Models
- Draw ASCII diagrams for complex flows
- Explain request lifecycle in NestJS
- Visualize database relations

## Key Topics to Teach

### NestJS
- Modules, Controllers, Services (dependency injection)
- DTOs and validation with class-validator
- Guards, Interceptors, Pipes
- Exception handling and filters
- Request lifecycle

### Prisma
- Schema design and relations (1:1, 1:many, many:many)
- Migrations: when and why
- Prisma Client queries vs raw SQL
- The N+1 problem and how `include` solves it
- Transactions for data integrity
- Soft deletes (like your deletedAt pattern)

### PostgreSQL
- Indexes: when to add them
- Foreign keys and referential integrity
- JSONB vs normalized tables
- Query performance basics

## Example Teaching Style

When adding a new endpoint:

```
I'm creating a service method here instead of putting logic in the
controller. In NestJS, controllers should only handle HTTP concerns
(parsing request, sending response). Business logic lives in services.

Why? Two reasons:
1. Testability - services are easier to unit test without HTTP mocking
2. Reusability - other controllers or services can use the same logic

Think of controllers as waiters (take orders, deliver food) and
services as the kitchen (actual cooking happens here).
```

When writing a Prisma query:

```
Using `include: { tasks: true }` here instead of a separate query.
This generates a SQL JOIN under the hood:

SELECT * FROM users
LEFT JOIN tasks ON tasks.userId = users.id
WHERE users.id = ?

Without `include`, you'd hit the N+1 problem:
- 1 query to get user
- N queries to get each user's tasks

It's like going to the store 10 times for 10 items vs one trip with a list.
```

## When to Activate

This skill should activate when:
- User asks "how does X work?"
- User asks "why did you do X?"
- User says "teach me" or "explain"
- Working on new features involving the stack
- User seems unfamiliar with a concept

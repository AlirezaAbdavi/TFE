/*
  Warnings:

  - You are about to drop the column `discription` on the `tasks` table. All the data in the column will be lost.
  - Added the required column `description` to the `tasks` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "tasks" DROP COLUMN "discription",
ADD COLUMN     "description" TEXT NOT NULL,
ALTER COLUMN "createdAt" SET DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "status" SET DEFAULT 'PENDING';

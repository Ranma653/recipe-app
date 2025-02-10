/*
  Warnings:

  - You are about to drop the column `kindeId` on the `Users` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Users_kindeId_key";

-- AlterTable
ALTER TABLE "Users" DROP COLUMN "kindeId";

/*
  Warnings:

  - A unique constraint covering the columns `[kindeId]` on the table `Users` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `Users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `Users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `kindeId` to the `Users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Users" ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "kindeId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Users_kindeId_key" ON "Users"("kindeId");

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");

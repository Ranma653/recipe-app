/*
  Warnings:

  - You are about to drop the column `allergy` on the `Catgeories` table. All the data in the column will be lost.
  - You are about to drop the column `diet` on the `Catgeories` table. All the data in the column will be lost.
  - You are about to drop the column `spicy` on the `Catgeories` table. All the data in the column will be lost.
  - You are about to drop the `Ingredients` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `RecipeIngredients` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Steps` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `recipeIngredients` to the `Recipes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `steps` to the `Recipes` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "RecipeIngredients" DROP CONSTRAINT "RecipeIngredients_ingredientId_fkey";

-- DropForeignKey
ALTER TABLE "RecipeIngredients" DROP CONSTRAINT "RecipeIngredients_recipeId_fkey";

-- DropForeignKey
ALTER TABLE "Steps" DROP CONSTRAINT "Steps_recipeId_fkey";

-- AlterTable
ALTER TABLE "Catgeories" DROP COLUMN "allergy",
DROP COLUMN "diet",
DROP COLUMN "spicy";

-- AlterTable
ALTER TABLE "Recipes" ADD COLUMN     "allergy" TEXT,
ADD COLUMN     "diet" TEXT,
ADD COLUMN     "recipeIngredients" TEXT NOT NULL,
ADD COLUMN     "spicy" DOUBLE PRECISION,
ADD COLUMN     "steps" TEXT NOT NULL;

-- DropTable
DROP TABLE "Ingredients";

-- DropTable
DROP TABLE "RecipeIngredients";

-- DropTable
DROP TABLE "Steps";

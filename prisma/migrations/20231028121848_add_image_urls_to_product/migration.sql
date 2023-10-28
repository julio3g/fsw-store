/*
  Warnings:

  - You are about to drop the column `discountPercent` on the `products` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "products" DROP COLUMN "discountPercent",
ADD COLUMN     "discountPercentage" INTEGER NOT NULL DEFAULT 0;

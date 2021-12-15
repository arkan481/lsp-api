/*
  Warnings:

  - You are about to drop the column `averageFixedCost` on the `ProductionCost` table. All the data in the column will be lost.
  - You are about to drop the column `averageTotalCost` on the `ProductionCost` table. All the data in the column will be lost.
  - You are about to drop the column `averageVariableCost` on the `ProductionCost` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `ProductionCost` DROP COLUMN `averageFixedCost`,
    DROP COLUMN `averageTotalCost`,
    DROP COLUMN `averageVariableCost`;

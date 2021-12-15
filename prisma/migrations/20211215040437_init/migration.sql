-- CreateTable
CREATE TABLE `ProductionCost` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `productionQuantity` INTEGER NOT NULL,
    `fixedCost` DOUBLE NOT NULL,
    `variableCost` DOUBLE NOT NULL,
    `totalCost` DOUBLE NOT NULL,
    `marginalCost` DOUBLE NOT NULL,
    `averageFixedCost` DOUBLE NOT NULL,
    `averageVariableCost` DOUBLE NOT NULL,
    `averageTotalCost` DOUBLE NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

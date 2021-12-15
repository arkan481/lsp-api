import { Prisma, ProductionCost } from "@prisma/client";
import { getAll, remove, save } from "../repositories/pcRepository";

const createProductionCost = async (
  pc: Prisma.ProductionCostCreateInput
): Promise<ProductionCost> => {
  pc.totalCost = calculateTotalCost(pc.fixedCost, pc.variableCost);
  pc.marginalCost = calculateTotalCost(pc.fixedCost, pc.variableCost);
  const newPC = await save(pc);
  return newPC;
};

const getAllProductionCost = async (): Promise<Array<ProductionCost>> =>
  getAll();

const calculateTotalCost = (fixedCost: number, variableCost: number): number =>
  fixedCost + variableCost;

const calculateMarginalCost = (
  totalCosts: { one: number; two: number },
  quantities: { one: number; two: number }
): number =>
  (totalCosts.two - totalCosts.one) / (quantities.two - quantities.one);

export {
  createProductionCost,
  calculateMarginalCost,
  calculateTotalCost,
  getAllProductionCost,
};

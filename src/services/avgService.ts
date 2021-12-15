import { ProductionCost } from "@prisma/client";
import { Averages } from "../typings";
import { getAll } from "../repositories/pcRepository";

const getAverages = async (): Promise<Averages> => {
  const productionCosts = await getAll();

  const totalQuantity = getTotalQuantity(productionCosts);
  const totalFixedCost = calculateTotalFixedCost(productionCosts);
  const totalVariableCost = calculateTotalVariableCost(productionCosts);
  const totalCosts = calculateTotalCosts(productionCosts);

  const avgFixedCost = calculateAvgFixedCost(totalFixedCost, totalQuantity);
  const avgVariableCost = calculateAvgVariableCost(
    totalVariableCost,
    totalQuantity
  );
  const avgTotalCost = calculateAvgTotalCost(totalCosts, totalQuantity);

  return { avgFixedCost, avgVariableCost, avgTotalCost };
};

const calculateTotalCosts = (pcs: Array<ProductionCost>): number => {
  let totalCosts = 0;
  pcs.forEach((pc) => {
    totalCosts += pc.totalCost;
  });

  return totalCosts;
};

const calculateTotalVariableCost = (pcs: Array<ProductionCost>): number => {
  let totalVariableCost = 0;
  pcs.forEach((pc) => {
    totalVariableCost += pc.variableCost;
  });

  return totalVariableCost;
};

const calculateTotalFixedCost = (pcs: Array<ProductionCost>): number => {
  let totalFixedCost = 0;
  pcs.forEach((pc) => {
    totalFixedCost += pc.fixedCost;
  });

  return totalFixedCost;
};

const getTotalQuantity = (pcs: Array<ProductionCost>): number => {
  let qty = 0;
  pcs.forEach((pc) => {
    qty += pc.productionQuantity;
  });

  return qty;
};

const calculateAvgFixedCost = (totalFixedCost: number, qty: number): number =>
  totalFixedCost / qty;

const calculateAvgVariableCost = (
  totalVariableCost: number,
  qty: number
): number => totalVariableCost / qty;

const calculateAvgTotalCost = (totalCost: number, qty: number): number =>
  totalCost / qty;

export {
  calculateAvgFixedCost,
  calculateAvgVariableCost,
  calculateAvgTotalCost,
  getAverages,
};

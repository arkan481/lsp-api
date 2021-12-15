import { Prisma, ProductionCost } from "@prisma/client";
import { invokeDb } from "../config";

const db = invokeDb();

const save = async (pc: Prisma.ProductionCostCreateInput) =>
  db.productionCost.create({ data: pc });

const remove = async (id: number) =>
  db.productionCost.delete({ where: { id } });

const getAll = async () => db.productionCost.findMany();

export { save, remove, getAll };

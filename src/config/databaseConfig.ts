/* eslint-disable no-empty-function */
/* eslint-disable no-useless-constructor */
import { PrismaClient } from "@prisma/client";

class Database {
  // eslint-disable-next-line no-use-before-define
  private static instance: PrismaClient;

  private constructor() {}

  public static getInstance(): PrismaClient {
    if (!Database.instance) {
      Database.instance = new PrismaClient();
    }

    return Database.instance;
  }
}

export default Database.getInstance;

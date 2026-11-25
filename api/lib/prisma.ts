import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma/client";

const requireEnv = (value: string | undefined, name: string): string => {
    if(!value) {
        throw new Error(`Missing environment variable: ${name}`);
    }

    return value;
}

const connectionString = requireEnv(process.env.DATABASE_URL, "DATABASE_URL");

const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

export { prisma };
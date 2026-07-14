import { Pool, PoolClient } from 'pg';

export const clients: Record<string, PoolClient> = {};

export const registerClient = async (database: string): Promise<void> => {
  const pool = new Pool({
    host: process.env.PG_HOST,
    port: Number(process.env.PG_PORT),
    user: process.env.PG_USERNAME,
    password: process.env.PG_PASSWORD,
    database,
    ssl: true,
  });

  clients[database] = await pool.connect();
};

export const getClient = (database: string): PoolClient => {
  const client = clients[database];

  if (!client) {
    throw new Error(`Client for database ${database} is not registered`);
  }

  return client;
};

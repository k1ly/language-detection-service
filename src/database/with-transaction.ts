import { PoolClient } from 'pg';

export const withTransaction = async <T>(
  client: PoolClient,
  action: () => Promise<T>,
): Promise<T> => {
  try {
    await client.query('BEGIN');

    const result = await action();

    await client.query('COMMIT');

    return result;
  } catch (error) {
    await client.query('ROLLBACK');
    throw error;
  }
};

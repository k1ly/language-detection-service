import { PoolClient } from 'pg';
import { Post } from './interfaces';

const BATCH_SIZE = 1000;

export const readBatch = async (client: PoolClient, lastRow: Post | null): Promise<Post[]> => {
  const { rows } = await client.query<Post>(
    `
    SELECT id, body, created_at
    FROM posts
    WHERE (
      $1::TIMESTAMP IS NULL
      OR (created_at, id) > ($1, $2::UUID)
    )
    ORDER BY created_at, id
    LIMIT $3
    `,
    [lastRow?.created_at, lastRow?.id, BATCH_SIZE],
  );

  return rows;
};

import { PoolClient } from 'pg';

export const updateBatch = async (
  client: PoolClient,
  rows: {
    id: string;
    languages: string[] | null;
  }[],
): Promise<void> => {
  if (!rows.length) {
    return;
  }

  const values: unknown[] = [];
  const placeholders: string[] = [];

  rows.forEach((row, index) => {
    const offset = index * 2;

    values.push(row.id);
    values.push(row.languages);

    placeholders.push(`($${offset + 1}::uuid, $${offset + 2}::text[])`);
  });

  await client.query(
    `
    UPDATE posts p
    SET languages = v.languages
    FROM (
      VALUES
      ${placeholders.join(',')}
    ) AS v(id, languages)
    WHERE p.id = v.id
    `,
    values,
  );
};

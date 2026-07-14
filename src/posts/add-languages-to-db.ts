import { PoolClient } from 'pg';
import { withTransaction } from '~/database';
import { getTextLanguages } from '~/language';
import { Post } from './interfaces';
import { readBatch } from './read-batch';
import { updateBatch } from './update-batch';

export const addLanguagesToDB = async (client: PoolClient): Promise<void> => {
  try {
    let lastRow: Post | null = null;

    while (true) {
      const posts = await readBatch(client, lastRow);

      if (posts.length === 0) {
        break;
      }

      const updates = posts.map((post) => ({
        id: post.id,
        languages: post.body ? getTextLanguages(post.body) : null,
      }));

      await withTransaction(client, () => updateBatch(client, updates));

      lastRow = posts[posts.length - 1];

      console.log(`Processed ${updates.length} posts`);
    }
  } catch (error) {
    console.error(error);
  } finally {
    client.release();
  }
};

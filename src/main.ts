import { config } from 'dotenv';
import { mkdirSync } from 'fs';
import { join } from 'path';
import { getClient, registerClient } from './database';
import { addLanguagesToDB, addLanguagesToFile } from './posts';

config();

const main = async () => {
  const dataPath = process.env.DATA_PATH;

  if (!dataPath) {
    throw new Error('DATA_PATH is not set. Add DATA_PATH=./data to your .env file.');
  }

  mkdirSync(dataPath, { recursive: true });

  addLanguagesToFile(join(dataPath, 'posts.json'));

  await registerClient(process.env.PG_POSTS_DB_NAME!);

  addLanguagesToDB(getClient(process.env.PG_POSTS_DB_NAME!));
};

main();

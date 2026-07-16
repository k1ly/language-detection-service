import { config } from 'dotenv';
import { mkdirSync } from 'fs';
import { join } from 'path';
import { addLanguagesToFile } from './posts';

config();

const main = (): void => {
  const dataPath = process.env.DATA_PATH;

  if (!dataPath) {
    throw new Error('DATA_PATH is not set. Add DATA_PATH=./data to your .env file.');
  }

  mkdirSync(dataPath, { recursive: true });

  addLanguagesToFile(join(dataPath, 'posts.json'));
};

main();

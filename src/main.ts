import { config } from 'dotenv';
import { mkdirSync } from 'fs';
import { addLanguagesToFile } from './posts';

const main = async () => {
  mkdirSync(process.env.DATA_PATH!, { recursive: true });

  addLanguagesToFile(`${process.env.DATA_PATH!}/posts.json`);
};

config();

main();

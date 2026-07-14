import { config } from 'dotenv';
import { mkdirSync } from 'fs';

const main = async () => {
  mkdirSync(process.env.DATA_PATH!, { recursive: true });
};

config();

main();

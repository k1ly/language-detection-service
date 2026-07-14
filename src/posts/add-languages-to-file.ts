import { readFileSync, writeFileSync } from 'fs';
import { detectTextLanguages } from '~/language';
import { Post } from './interfaces';

export const addLanguagesToFile = (path: string): void => {
  try {
    const posts = JSON.parse(readFileSync(path, 'utf8')) as Post[];

    if (posts.length === 0) {
      return;
    }

    const updates = posts.map((post) => ({
      body: post.body,
      languages:
        post.body ? detectTextLanguages(post.body, false).map(({ language }) => language) : null,
    }));

    writeFileSync(path, JSON.stringify(updates, null, 2), 'utf8');

    console.log(`Processed ${updates.length} posts`);
  } catch (error) {
    console.error(error);
  }
};

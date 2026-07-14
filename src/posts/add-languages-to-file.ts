import { readFileSync, writeFileSync } from 'fs';
import { getTextLanguages } from '~/language';
import { Post } from './interfaces';

export const addLanguagesToFile = (path: string): void => {
  const posts = JSON.parse(readFileSync(path, 'utf8')) as Post[];

  const updates = posts.map((post) => ({
    body: post.body,
    languages: post.body ? getTextLanguages(post.body) : null,
  }));

  writeFileSync(path, JSON.stringify(updates, null, 2), 'utf8');

  console.log(`Processed ${updates.length} posts`);
};

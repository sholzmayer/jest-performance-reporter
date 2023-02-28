import { existsSync, mkdirSync } from 'fs';
import { dirname } from 'path';

export const ensureDirectory = (filePath: string) => {
  const dirPath = dirname(filePath);
  if (!existsSync(dirPath)) {
    mkdirSync(dirPath, { recursive: true });
  }
};

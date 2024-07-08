import { Schema } from 'redis-om';

export const content = new Schema('album', {
  hash: { type: 'string' },
  created: { type: 'date' },
});

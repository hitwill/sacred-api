import { Schema } from 'redis-om';

export const votes = new Schema('album', {
  contentHashToUserId: { type: 'string' },
  vote: { type: 'number' },
});

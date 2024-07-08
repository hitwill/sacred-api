import { Schema } from 'redis-om';

export const rewards = new Schema('album', {
  userId: { type: 'string' },
  balance: { type: 'string' },
});

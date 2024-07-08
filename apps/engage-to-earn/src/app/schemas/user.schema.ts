import { Schema } from 'redis-om';

export const user = new Schema('album', {
  userId: { type: 'string' },
  address: { type: 'string' },
});

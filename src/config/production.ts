// src/config/production.ts
// Entries
import {
  eventRecord
} from '@/entry';
import { ConnectionOptions } from 'typeorm';

export default {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'user',
  password: '123456',
  database: 'Test',
  dropSchema: false,
  entities: [
    eventRecord,
  ],
  extra: {
    charset: 'utf8mb4_unicode_ci'
  },
} as ConnectionOptions;

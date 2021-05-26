// src/config/dev.ts
import { ConnectionOptions } from 'typeorm';
import * as prodConfig from './production';

// extends from production config.
export default {
  ...prodConfig.default,
  dropSchema: false,
  logging: 'all',
} as ConnectionOptions;

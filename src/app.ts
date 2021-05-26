// src/app.ts
import { ConnectionOptions, createConnection } from 'typeorm';
import express, { Express, Request, Response } from 'express';
import cors from 'cors';

// Services
import {
  eventRecordService
} from '@/service';
import {
  eventRecordRoutes
} from '@/controller';

const app = express();

export default function appInit(typeormConfig: ConnectionOptions): Promise<Express> {
  return new Promise(async (resolve) => {
    app.use(cors({
      origin: '*',
      methods: ['GET', 'POST', 'PATCH', 'DELETE'],
      allowedHeaders: ['Content-Type', 'Authorization'],
    }));
    // Use body parser to read sent json payloads
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());

    await createConnection(typeormConfig);

    // service init
    eventRecordService.init();

    // controller register
    eventRecordRoutes(app);

    return resolve(app);
  })
}

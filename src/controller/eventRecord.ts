// src/controller/eventRecord.ts
import * as express from 'express';

export function eventRecordRoutes(app: express.Router) {
  app.get('/', function(req, res, next) {
    res.send('Hello World');
  })
}

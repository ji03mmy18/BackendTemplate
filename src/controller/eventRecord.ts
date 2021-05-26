// src/controller/eventRecord.ts
import {
  Body, Controller, Delete, Get, Patch, Path, Post, Route, Tags
} from 'tsoa';

import { eventRecord } from '@/entry';
import { eventRecordService } from '@/service';
import { eventRecordDTO, UpdateEventRecordDTO } from '@/entry/dto/eventRecordDTO';

@Tags('EventRecord')
@Route('eventrecord')
export class eventRecordController extends Controller {
  @Get('{event_id}')
  public async getById(
    @Path('event_id') eventId: number,
  ): Promise<eventRecord> {
    return eventRecordService.getInstance().getById(eventId);
  }

  @Delete('{event_id}')
  public async deleteById(
    @Path('event_id') eventId: number,
  ): Promise<any> {
    return eventRecordService.getInstance().deleteById(eventId);
  }

  @Post()
  public async add(
    @Body() form: eventRecordDTO,
  ): Promise<any> {
    const { date, person, content } = form;
    return eventRecordService.getInstance().add(date, person, content);
  }

  @Patch('{event_id}')
  public async updateById(
    @Path('event_id') eid: number,
      @Body() form: UpdateEventRecordDTO,
  ): Promise<any> {
    const { date, person, content } = form;
    return eventRecordService.getInstance().updateById(eid, date, person, content);
  }
}

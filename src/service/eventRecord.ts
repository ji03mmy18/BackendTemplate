// src/service/announcement.ts
import {
  DeleteResult, getRepository, InsertResult, Repository, UpdateResult,
} from 'typeorm';

import { eventRecord } from '@/entry';
import { filterObjectUndefined } from '@/utils';

export class eventRecordService {
  private static INSTANCE: eventRecordService;
  private eventRecordRepo: Repository<eventRecord>;

  public static init(): eventRecordService {
    if(this.INSTANCE === undefined) {
      this.INSTANCE = new eventRecordService();
    }
    return this.INSTANCE;
  }

  public static getInstance(): eventRecordService {
    return this.INSTANCE;
  }

  constructor() {
    this.eventRecordRepo = getRepository(eventRecord);
  }

  public async getById(event_id: number): Promise<eventRecord> {
    const eventrecord: eventRecord | undefined = await this.eventRecordRepo.findOne({
      id: event_id,
    });

    if (eventrecord === undefined) {
      throw new Error(`No such eventRecord with event_id: ${event_id}`);
    }
    return eventrecord;
  }

  public async deleteById(event_id: number): Promise<boolean> {
    const result: DeleteResult = await this.eventRecordRepo.delete({
      id: event_id,
    });

    return Number(result.affected) > 0;
  }

  public async add(date: Date, person: string, content: string): Promise<boolean> {
    const result: InsertResult = await this.eventRecordRepo.insert({
      date, person, content,
    });

    return result.raw["insertId"] >= 1;
  }

  public async updateById(
    event_id: number, date?: Date, person?: string, content?: string,
    ): Promise<boolean> {
      const result: UpdateResult = await this.eventRecordRepo
        .createQueryBuilder()
        .update(eventRecord)
        .set(filterObjectUndefined({
          date, person, content,
        }))
        .where('id = :event_id', { event_id })
        .execute();

      return result.raw["affectedRows"] >= 1;
    }
}

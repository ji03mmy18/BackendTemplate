// src/entry/dto/eventRecordDTO.ts

export interface eventRecordDTO {
  date: Date;
  person: string;
  content: string;
}

export interface UpdateEventRecordDTO {
  date?: Date;
  person?: string;
  content?: string;
}

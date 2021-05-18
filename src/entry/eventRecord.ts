import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class eventRecord {
  @PrimaryGeneratedColumn('increment', {
    type: 'int',
    unsigned: true,
  })
  id: number;
  @Column({
    type: 'datetime',
    nullable: false,
  })
  date: Date;
  @Column({
    type: 'varchar',
    length: 30,
    collation: 'utf8mb4_unicode_ci',
    nullable: false,
  })
  person: string;
  @Column({
    type: 'varchar',
    length: 255,
    collation: 'utf8mb4_unicode_ci',
    nullable: true,
    default: 'NULL',
  })
  content: string | null;

  constructor(param: eventRecord = {} as eventRecord) {
    const {
      id,
      date,
      person,
      content = null,
    } = param;

    this.id = id;
    this.date = date;
    this.person = person;
    this.content = content;
  }
}

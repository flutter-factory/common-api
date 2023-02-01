import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { MEDIA_TYPE } from '../ideal-type-world-cup.type';
import { IdealTypeWorldCup } from './ideal-type-world-cup.entity';

@Entity({ database: 'ideal_type_world_cup', name: 'ideal_type_item' })
export class IdealTypeItem {
  @PrimaryGeneratedColumn()
  idealTypeItemId!: number;

  @Column({ length: 50 })
  name!: string;

  @Column({ type: 'enum', enum: MEDIA_TYPE })
  mediaType!: MEDIA_TYPE;

  @Column()
  mediaUrl!: string;

  @Column()
  startSeconds?: number;

  @Column()
  endSeconds?: number;

  @Column({ default: 0 })
  totalGamePlayCount = 0;

  @Column({ default: 0 })
  finalWinCount = 0;

  @Column({ default: 0 })
  matchCount = 0;

  @Column({ default: 0 })
  matchWinCount = 0;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt?: Date;

  @ManyToOne(() => IdealTypeWorldCup, (worldCup) => worldCup.idealTypeItems)
  @JoinColumn({ name: 'ideal_type_world_cup_id' })
  idealTypeWorldCup!: IdealTypeWorldCup;
}

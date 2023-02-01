import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { WORLD_CUP_STATUS } from '../ideal-type-world-cup.type';
import { IdealTypeItem } from './ideal-type-item.entity';

@Entity({ database: 'ideal_type_world_cup', name: 'ideal_type_world_cup' })
export class IdealTypeWorldCup {
  @PrimaryGeneratedColumn()
  idealTypeWorldCupId!: number;

  @Column()
  uid!: number;

  @Column({ length: 50 })
  title!: string;

  @Column({ length: 255 })
  description!: string;

  @Column({ name: 'status', type: 'enum', enum: WORLD_CUP_STATUS })
  worldCupStatus!: WORLD_CUP_STATUS;

  @Column()
  thumbnailUrl!: string;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  @OneToMany(() => IdealTypeItem, (item) => item.idealTypeWorldCup)
  idealTypeItems?: IdealTypeItem[];
}

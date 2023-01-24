import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { WORLD_CUP_STATUS } from "../ideal-type-world-cup.type";


@Entity('ideal_type_world_cup')
export class IdealTypeWorldCup {
    @PrimaryGeneratedColumn({ name: 'ideal_type_world_cup_id' })
    idealTypeWorldCupId: number;

    @Column({ name: 'uid' })
    uid: number;
    
    @Column({ name: 'title', length: 50 })
    title: string;

    @Column({ name: 'title', length: 255 })
    description: string;
    
    @Column({ name: 'status', type: 'enum', enum: WORLD_CUP_STATUS })
    worldCupStatus: string;

    @Column({ name: 'thumbnail_url' })
    thumbnailUrl: string;
    
    @Column({ name: 'created_at', default: () => "CURRENT_TIMESTAMP(6)" })
    createdAt: Date;
    
    @Column({ name: 'updated_at', default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
    updatedAt: Date;
}

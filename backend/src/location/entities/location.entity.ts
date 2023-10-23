import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { User } from '../../users/entities/user.entity';

@Entity('location')
export class Location {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  streetName: string;

  @Column()
  postCode: number;

  @Column()
  houseNumber: string;

  @Column()
  province?: string;

  @Column()
  country: string;

  /* Relations */

  @ManyToOne(() => User, (user) => user.location)
  user!: User;

  /* Date Columns */

  @CreateDateColumn({ select: false })
  createdAt: Date;

  @UpdateDateColumn({ select: false })
  updatedAt: Date;

  @DeleteDateColumn({ select: false })
  deletedAt: Date | null;
}

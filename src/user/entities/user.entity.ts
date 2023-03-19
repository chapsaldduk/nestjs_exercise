import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  user_id: string;

  @Column({ nullable: false })
  user_pw: string;

  @Column({ nullable: false })
  user_email: string;

  @Column({ nullable: false })
  user_number: string;
}

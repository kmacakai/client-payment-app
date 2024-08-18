import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, Relation } from 'typeorm';
import { Client } from './client.entity'; // Use type reference

@Entity()
export class Payment {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Client, (client) => client.payments, { onDelete: 'CASCADE' })
  client: Relation<Client>;

  @Column()
  amount: number;

  @Column()
  recipientName: string;

  @Column()
  recipientBankName: string;

  @Column()
  recipientAccountNumber: string;

  @Column({ nullable: true })
  notes?: string;

  @Column({ default: 'Pending' })
  status: string;
}
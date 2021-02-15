import { Entity, Column, ManyToOne } from 'typeorm';
import Model from './Model';
import { User } from './User';

@Entity('posts')
export class Post extends Model {
  @Column()
  title: string;

  @Column()
  body: string;

  @ManyToOne(() => User) // many posts belong to one user
  user: User;
}

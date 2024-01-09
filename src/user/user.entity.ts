import { Entity,Column,PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class userEntity{

  @PrimaryGeneratedColumn()
  id:number;

  @Column()
  email:string;

  @Column()
  password:string;
      
}
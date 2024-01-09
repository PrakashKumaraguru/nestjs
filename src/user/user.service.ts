import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { userEntity } from './user.entity';
import { error } from 'console';


@Injectable()
export class UserService {

    constructor(
        @InjectRepository(userEntity) 
        private repository:Repository<userEntity>
    ){}

    createUser(email:string,password:string){

        const userLog = this.repository.create({email,password});
        return this.repository.save(userLog);

    }

     async findOneUser(id){
       return await this.repository.findOne({where:{id:id}})

    }

     findusers(email){
       return this.repository.find(email);
    }

   async updateUserDetials(id:number,attrs:Partial<userEntity>){
      const updateuser =  await this.repository.findOne({where:{id}})
      if(!updateuser) throw new error ( 'data was not found')
      Object.assign(updateuser,attrs)
      return this.repository.save(updateuser);

    }

    async deleteUser(id:number){
       const delUser =  await this.repository.findOne({where:{id}});
       if(!delUser) throw new error('there is no data ');
       return this.repository.remove(delUser);
       


    }
     
  
}

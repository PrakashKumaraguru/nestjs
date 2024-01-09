import { Controller,
         Post,
         Body,
         Get,
         Param,
         Query,
         Patch,
         Delete
 } from '@nestjs/common';
import { UserService } from './user.service';
import { createUserDtos } from './dtos/create-user.dtos';
import { error } from 'console';
import { updateUserDtos } from './dtos/update-user.dtos';


@Controller('user')
export class UserController {

    constructor( private userservice:UserService){


    }
    @Post('signin')
    createUser(@Body() Body:createUserDtos){
       return this.userservice.createUser(Body.email,Body.password);

      }

    @Get('/:id')
    findOneUser(@Param('id')id:string){
       return this.userservice.findOneUser(parseInt(id))

      }

    @Get()
    async findUser(@Query('email') email:string ){
       const users = await  this.userservice.findusers({email});
        if(!users)  throw error( 'data was not founded')
        return users;
       
      }

      @Patch('/:id')
      updateUser(@Param('id') id:string ,@Body( ) Body:updateUserDtos){
        return this.userservice.updateUserDetials(parseInt(id),Body);

      }
    
       @Delete('/:id')
       deleteUser(@Param('id')id:string){
         return this.userservice.deleteUser(parseInt(id));

       }
       






   
    
   
}

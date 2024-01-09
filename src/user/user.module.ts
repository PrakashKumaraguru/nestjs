import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { userEntity } from './user.entity';

@Module({
  imports:[TypeOrmModule.forFeature([userEntity])],
  providers: [UserService],
  controllers: [UserController]
})
export class UserModule {}

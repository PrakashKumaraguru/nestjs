import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { userEntity } from './user/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'sqlite',
      database:'db.sqlite',
      entities:[userEntity],
      synchronize:true
    }),
    UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

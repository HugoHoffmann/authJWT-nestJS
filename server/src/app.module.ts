import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './UserModule/users.module';
import { UsersController } from './UserModule/controllers/user.controller';
import { UsersService } from './UserModule/service/user.service';

@Module({
  imports: [UsersModule],
  controllers: [AppController, UsersController],
  providers: [AppService, UsersService],
})
export class AppModule {}

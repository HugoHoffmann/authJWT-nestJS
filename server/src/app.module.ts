import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './UserModule/user.module';
import { typeOrmConfiguration } from './config/typeOrmConfiguration'
import { TypeOrmModule } from '@nestjs/typeorm';
// configuração typeorm

@Module({
  imports: [
    TypeOrmModule.forRootAsync({ useFactory: typeOrmConfiguration }), 
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

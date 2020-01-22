import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { UsersController } from './controllers' 
import { UserService } from './service' 

@Module({
    imports: [
        JwtModule.register({
            secret: 'teste',
            signOptions: { expiresIn: '111' }
        })
    ],
    controllers: [UsersController],
    providers: [UserService],
    exports: [UserService]
})
export class UserModule {}

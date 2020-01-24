 
import { ApiHideProperty } from '@nestjs/swagger';
import { User } from '../entity';
import { IsNotEmpty } from 'class-validator';

export class NewUserDTO {
    
  @ApiHideProperty()
  @IsNotEmpty()
  name: User['name'];

  @ApiHideProperty()
  @IsNotEmpty()
  email: User['email'];

  @ApiHideProperty()
  @IsNotEmpty()
  password: User['password'];

}
import { ApiHideProperty } from '@nestjs/swagger';
import { User } from '../entity';
import { IsNotEmpty } from 'class-validator';

export class UserUpdateDTO {
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
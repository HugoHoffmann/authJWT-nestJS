import { User } from '../entity';
import { ApiHideProperty } from '@nestjs/swagger';

export class UserDTO {
  @ApiHideProperty()
  id: User['id'];

  @ApiHideProperty()
  name: User['name'];

  @ApiHideProperty()
  email: User['email'];

  @ApiHideProperty()
  password: User['password'];

}
import { IsString, IsNotEmpty } from 'class-validator';
export class CreateUserDTO {
  @IsNotEmpty()
  @IsString()
  user_id: string;

  @IsNotEmpty()
  @IsString()
  user_pw: string;

  @IsNotEmpty()
  @IsString()
  user_email: string;

  @IsNotEmpty()
  @IsString()
  user_number: string;
}

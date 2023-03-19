import { IsOptional, IsString, IsNumber } from 'class-validator';

export class UpdateUserDTO {
  @IsString()
  user_pw?: string;

  @IsString()
  user_email?: string;

  @IsString()
  user_number?: string;
}

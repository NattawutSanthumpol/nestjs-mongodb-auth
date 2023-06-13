import { IsNotEmpty, IsString, Length } from 'class-validator';

export class LoginDto {
  @IsString()
  @IsNotEmpty({ message: 'Not Empty' })
  email: string;

  @IsString()
  @IsNotEmpty()
  @Length(6, 25, {
    message:
      'Password must not be less than 6 and not more than 25 characters.',
  })
  password: string;
}

import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class AuthDto {
  @IsString()
  @IsNotEmpty({ message: 'Required field please fill !' })
  name: string;

  @IsString()
  @IsNotEmpty({ message: 'Required field please fill !' })
  surname: string;

  @IsString()
  @IsEmail()
  @IsNotEmpty({ message: 'Required field please fill !' })
  email: string;

  @IsString()
  @IsNotEmpty()
  @Length(6, 25, {
    message:
      'Password must not be less than 6 and not more than 25 characters.',
  })
  password: string;
}

import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateEmployeeDto {
  @IsString()
  @IsNotEmpty({ message: 'Invalid name is mandatory' })
  name: string;

  @IsString()
  @IsNotEmpty({ message: 'Invalid role is mandatory' })
  role: string;

  @IsNumber()
  @IsNotEmpty({ message: 'Invalid experience is mandatory' })
  experience: number;
}

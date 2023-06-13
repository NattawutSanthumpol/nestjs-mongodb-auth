import { Controller, Get, Post, Body, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard("jwt"))
@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Get()
  async getAll() {
    return await this.employeeService.getAll();
  }

  @Get('/:id')
  async getById(@Param('id') id: string) {
    return await this.employeeService.getById(id);
  }

  @Post()
  async create(@Body() employee: CreateEmployeeDto) {
    return await this.employeeService.create(employee);
  }

  @Put('/:id')
  async update(@Param('id') id: string, @Body() employee: UpdateEmployeeDto) {
    return await this.employeeService.update(id, employee);
  }

  @Delete('/:id')
  async delete(@Param('id') id: string) {
    await this.employeeService.delete(id);
  }
}

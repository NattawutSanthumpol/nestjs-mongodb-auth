import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Employee, EmployeeDocument } from './entities/employee.entity';
import { Model } from 'mongoose';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectModel(Employee.name) private employeeModel: Model<EmployeeDocument>,
  ) {}

  async getAll() {
    return await this.employeeModel.find().exec();
  }

  async getById(id: string) {
    return await this.employeeModel.findById(id).exec();
  }

  async create(employee: CreateEmployeeDto) {
    const newEmployee = new this.employeeModel(employee);
    return await newEmployee.save();
  }

  async update(id: string, employee: UpdateEmployeeDto) {
    return await this.employeeModel.findByIdAndUpdate(id, employee, {
      new: true,
    });
  }

  async delete(id: string) {
    await this.employeeModel.findByIdAndRemove(id);
  }
}

import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { EmployeeModule } from './employee/employee.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://neslnwfaro003:fm1kMscf@cluster0.rl3tmhp.mongodb.net/Nest-API?retryWrites=true&w=majority'),
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
    EmployeeModule,
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}

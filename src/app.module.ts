import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JobsModule } from './jobs/jobs.module';
import { CompaniesModule } from './companies/companies.module';
import { PositionsModule } from './positions/positions.module';

@Module({
  imports: [JobsModule, CompaniesModule, PositionsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

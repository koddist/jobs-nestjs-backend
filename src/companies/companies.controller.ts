import { Controller, Get } from '@nestjs/common';
import { Company } from './interfaces/company';
import { CompaniesService } from './companies.service';

@Controller('companies')
export class CompaniesController {

  constructor(private readonly companiesService: CompaniesService) {
  }


  @Get()
  getCompanies(): Company[] {
    return this.companiesService.getCompanies();
  }
}

import { Injectable } from '@nestjs/common';
import { Company } from './interfaces/company';
import { companies } from './mock-data/companies';

@Injectable()
export class CompaniesService {
  getCompanies(): Company[] {
    return companies;
  }
}

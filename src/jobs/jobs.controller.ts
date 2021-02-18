import { Controller, Get, Query } from '@nestjs/common';
import { Job } from './interfaces/job';
import { JobsService } from './jobs.service';

@Controller('jobs')
export class JobsController {
  constructor(private readonly jobsService: JobsService) {}

  @Get()
  getJobs(@Query() query): Job[] {
    return this.jobsService.getJobs(query);
  }
}

import { Injectable } from '@nestjs/common';
import { jobs } from './mock-data/jobs';
import { Job } from './interfaces/job';

const QUERY_SEARCH = 'search';

@Injectable()
export class JobsService {
  getJobs(query: any = null): Job[] {
    let result = jobs;
    if (query) {
      for (const item in query) {
        if (item === QUERY_SEARCH) {
          const searchString = query[item].toLocaleLowerCase();
          result = result.filter((x) =>
            x.description.toLocaleLowerCase().includes(searchString),
          );
        } else {
          result = result.filter((x) => x[item] == query[item]);
        }
      }
    }
    return result;
  }
}

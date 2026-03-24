import { Component, OnInit } from '@angular/core';
import { Jobservice } from '../jobservice';
import { forkJoin } from 'rxjs';

export interface Job {
  by: string;
  id: number;
  score: number;
  time: number;
  title: string;
  type: string;
  url?: string;
}

@Component({
  selector: 'app-jobsboard',
  standalone: false,
  templateUrl: './jobsboard.html',
  styleUrl: './jobsboard.scss',
})
export class Jobsboard implements OnInit {
  jobIds: number[] = [];
  jobs: Job[] = [];
  currentIndex = 0;
  pageSize = 6;
  constructor(private jobsData: Jobservice) {}
  ngOnInit(): void {
    this.jobsData.getJobs().subscribe((res) => {
      this.jobIds = res;
          console.log(this.jobIds);
          this.loadMoreJobs();
    });
  }
  loadMoreJobs() {
     const nextIds = this.jobIds.slice(this.currentIndex, this.currentIndex + this.pageSize);

     const requests = nextIds.map((id) => this.jobsData.getJobById(id));

     forkJoin(requests).subscribe((newJobs) => {
       this.jobs.push(...newJobs);
     });
  this.currentIndex += this.pageSize;
  }
}

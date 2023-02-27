import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { dataService } from 'src/app/data.service';

interface jobObj {
  company_name: string;
  id: string;
  job_description: string;
  job_title: string;
}

interface obj {
  status: string
  jobs: jobObj[]
}

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  objList !: jobObj[]
  pageNumber: number = 0
  dataAvailable: boolean = false
  postUrl: string = 'https://kudoswall.com/jobsapi/get_all_job_posts/'

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    this.Request()
  }

  // descriptionInit() {
  //   console.log(this.objList)
  //   for (let i in this.objList) {
  //     let id = 'job-description-' + i
  //     console.log(id, this.objList[i].job_description)
  //     document.getElementById(id)!.innerHTML = this.objList[i].job_description
  //   }
  // }

  btnClick(num: number) {
    this.pageNumber = num
    this.Request()
  }

  Request() {
    this.http.post<obj>(this.postUrl, { "page": this.pageNumber }).subscribe((data) => {
      this.objList = data.jobs
      this.dataAvailable = true
    })
  }



}

import { Component, OnInit } from '@angular/core';
import { dataService } from 'src/app/data.service';

interface jobObj {
  company_name: string;
  id: string;
  job_description: string;
  job_title: string;
}

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  objList !: jobObj[]

  constructor(private service: dataService) {
  }

  ngOnInit(): void {

    this.service.Request().then((x) => {
      this.objList = x
    })
  }

}

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

interface jobs {
    company_name: string;
    id: string;
    job_description: string;
    job_title: string;
}

interface obj {
    status: string
    jobs: jobs[]
}

@Injectable({
    providedIn: 'root'
})
export class dataService {
    list !: jobs[]
    postUrl: string = 'https://kudoswall.com/jobsapi/get_all_job_posts/'
    constructor(private http: HttpClient) {

    }

    getJobList(page: number) {
        this.Request(page)
        return this.list
    }
    Request(page: number) {
        this.http.post<obj>(this.postUrl, { "page": page }).subscribe((data) => {
            this.list = data.jobs
        })
    }
}


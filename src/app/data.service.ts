import { Injectable } from "@angular/core";
import axios from "axios";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class dataService {
    postUrl: string = 'https://kudoswall.com/jobsapi/get_all_job_posts/'
    constructor() {

    }

    Request() {
        return axios.post(this.postUrl, {
            "page": "1"
        })
            .then(function (response) {
                console.log(response.data.jobs)
                return response.data.jobs
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}

// getJobsRequest() {
//     /** POST: add a new hero to the database */
//     const header = new HttpHeaders({
//         "page": "1"
//     })
//      this.http.post<obj>(this.postUrl, { page: '1' }).subscribe((data) => {
//         return data.jobs
//     })

// }
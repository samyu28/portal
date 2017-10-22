import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { TaskSummary } from './task';
import { TASKS } from './mock-tasks';

@Injectable()
export class TaskService {

    private taskEP = 'http://localhost:8090/task-api';
    private headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(private http: Http) { }

    getMockTasks(): Promise<TaskSummary[]> {
        return Promise.resolve(TASKS);
    }

    getTasksSlowly(): Promise<TaskSummary[]> {
        return new Promise(resolve => {
            setTimeout(() => resolve(this.getMockTasks()), 3000);
        });
    }

    getTasks(): Promise<TaskSummary[]> {

        return this.http.get(this.taskEP + '/task/')
            .toPromise()
            .then(response => response.json() as TaskSummary[])
            .catch(this.handleError);
    }

    getTask(id: number): Promise<string> {
        return this.http.get(this.taskEP + '/task/${id}')
            .toPromise()
            .then(response => response.json() as string)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('Task API call failed: ', error);
        return Promise.reject(error.message || error);
    }

    extractData = function (value) {
        var body = value.json();
        console.log(body);
        console.log(value);        
        return body || {};
    };
}
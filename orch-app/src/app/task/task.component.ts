import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TaskSummary } from './task';
import { TaskService } from './task.service';

@Component({
    selector: 'my-task',
    templateUrl: './task.component.html'
})

export class TaskComponent implements OnInit {
    tasks: TaskSummary[];
    selection: TaskSummary;

    constructor(
        private router: Router,
        private taskService: TaskService) { }

    ngOnInit(): void {
        let instance: TaskComponent = this;
        this.taskService.getTasks().then(tasks => instance.tasks = tasks);
    }

    onSelect(task: TaskSummary): void {
        this.selection = task;
    }

    gotoDetail(): void {
        this.router.navigate(['/taskdetail', this.selection.taskId]);
    }
}
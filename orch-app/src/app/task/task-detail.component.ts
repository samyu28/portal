import 'rxjs/add/operator/switchMap';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { FormGroup } from '@angular/forms';

import { FormField } from '../dynform/formfield';
import { Order } from '../order/order';

import { TaskService } from './task.service';
import { DynamicFormService } from '../dynform/dynamic-form.service';

@Component({
    selector: 'task-detail',
    templateUrl: './task-detail.component.html'
})

export class TaskDetailComponent implements OnInit {

    taskData: JSON;
    dynform: FormGroup;

    constructor(
        private route: ActivatedRoute,
        private location: Location,
        private taskService: TaskService,
        private formService: DynamicFormService
    ) { }

    ngOnInit(): void {
        this.route.paramMap
            .switchMap((params: ParamMap) => this.taskService.getTask(+params.get('id')))
            .subscribe(response => this.render(response));
    }

    render(data: string): void {
        console.log(data);
        // this.dynform = this.formService.render(this.taskData['fields']);
    }

    goBack(): void {
        this.location.back();
    }

    onSubmit() {
        // TODO
    }
}
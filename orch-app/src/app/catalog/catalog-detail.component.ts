import 'rxjs/add/operator/switchMap';
import { Component, OnInit, Input, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { FormGroup, FormBuilder, } from '@angular/forms';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

import { Item } from './item';
import { Order } from '../order/order';

import { CatalogService } from './catalog.service';
import { OrderService } from '../order/order.service';
import { DynamicFormService } from '../dynform/dynamic-form.service';
import { FormField } from '../dynform/formfield';

@Component({
    selector: 'catalog-detail',
    templateUrl: './catalog-detail.component.html'
})

export class CatalogDetailComponent implements OnInit {
    toaster: any;
    form: FormGroup;
    formField: FormField = new FormField();

    item: Item;
    dynform: FormGroup;
    payload = '';
    display: boolean = false;

    constructor(
        private route: ActivatedRoute,
        private location: Location,
        private catalogService: CatalogService,
        private orderService: OrderService,
        private formService: DynamicFormService,
        private fb: FormBuilder,
        public toastr: ToastsManager, vcr: ViewContainerRef
    ) {
        this.route.paramMap
            .switchMap((params: ParamMap) => this.catalogService.getItem(+params.get('id')))
            .subscribe(item => this.item = item);

        this.toastr.setRootViewContainerRef(vcr);
    }



    ngOnInit(): void {
        this.dynform = this.formService.render(this.item.fields);
        this.form = this.fb.group({
            name: '',
            label: '',
            type: '',
            pattern: ''
        });
    }


    showSuccess() {
        this.display = true;
    }






    goBack(): void {
        this.location.back();
    }

    onSubmit() {

        // Update
        for (let v in this.dynform.value) {
            this.item.fields.find(f => f.name == v).value = this.dynform.value[v];
        }

        let order = new Order();
        order.itemId = this.item.id;
        order.orderedBy = 'admin'; // TODO
        order.orderedOn = new Date().valueOf();
        order.fields = JSON.parse(JSON.stringify(this.item.fields));

        console.log(JSON.stringify(order));
        this.orderService.create(order);
        this.goBack();
        this.toastr.onClickToast()
            .subscribe(toast => {
                /*
                * Do some stuff here
                */
                console.log(toast.data);
            });


    }
}
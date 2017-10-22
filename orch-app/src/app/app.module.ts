import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule }    from '@angular/http';
import { FormsModule } from '@angular/forms';
import {ToastModule} from 'ng2-toastr/ng2-toastr';

import { AppComponent } from './app.component';
import { CatalogComponent } from './catalog/catalog.component';
import { CatalogDetailComponent } from './catalog/catalog-detail.component';
import { CatalogService } from './catalog/catalog.service';
import { OrderComponent } from './order/order.component';
import { OrderService } from './order/order.service';
import { TaskComponent } from './task/task.component';
import { TaskService } from './task/task.service';
import { FormFieldComponent } from './dynform/formfield.component';
import { DynamicFormService } from './dynform/dynamic-form.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DialogModule} from 'primeng/primeng';

const routes: Routes = [
    { path: '', redirectTo: '/catalog', pathMatch: 'full' },
    { path: 'catalog', component: CatalogComponent },
    { path: 'catalog/:id', component: CatalogDetailComponent },
    { path: 'order', component: OrderComponent},
    { path: 'task', component: TaskComponent }
];

@NgModule({
    declarations: [
        AppComponent,
        FormFieldComponent,
        CatalogComponent,
        CatalogDetailComponent,
        OrderComponent,
        TaskComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot(routes),
        ToastModule.forRoot(),
        DialogModule
    ],
    providers: [DynamicFormService, CatalogService, OrderService, TaskService ],
    bootstrap: [AppComponent]
})

export class AppModule { }

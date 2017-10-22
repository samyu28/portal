import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Order } from './order';

@Injectable()
export class OrderService {

    private orderEP = 'http://localhost:8090/order-api/order';
    private headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(private http: Http) { }

    getOrders(): Promise<Order[]> {
        return Promise.resolve([]); // TODO
    }

    getOrder(id: number): Promise<Order> {
        return this.getOrders()
            .then(orders => orders.find(order => order.id === id));
    }

    create(order: Order): Promise<Order> {

        console.log(JSON.stringify(order));
        return this.http
            .post(this.orderEP, JSON.stringify(order), { headers: this.headers })
            .toPromise()
            .then(res => res.json().data as Order)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('Order API call failed: ', error);
        return Promise.reject(error.message || error);
    }
}

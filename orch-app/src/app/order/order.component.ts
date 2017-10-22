import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Order } from './order';
import { OrderService } from './order.service';

@Component({
    selector: 'my-order',
    templateUrl: './order.component.html'
})

export class OrderComponent implements OnInit {
    orders: Order[];
    selection: Order;

    constructor(
        private router: Router,
        private orderService: OrderService) { }

    getOrders(): void {
        this.orderService.getOrders().then(orders => this.orders = orders);
    }

    ngOnInit(): void {
        this.getOrders();
    }

    onSelect(order: Order): void {
        this.selection = order;
    }

    gotoDetail(): void {
        this.router.navigate(['/orderdetail', this.selection.id]);
    }
}
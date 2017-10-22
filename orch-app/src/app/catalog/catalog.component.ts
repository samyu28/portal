import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Item } from './item';
import { CatalogService } from './catalog.service';

@Component({
    selector: 'my-catalog',
    templateUrl: './catalog.component.html'
})

export class CatalogComponent implements OnInit {
    items: Item[];
    selection: Item;

    constructor(
        private router: Router,
        private catalogService: CatalogService) { }

    getItems(): void {
        this.catalogService.getItems().then(items => this.items = items);
    }

    ngOnInit(): void {
        this.getItems();
    }

    onSelect(item: Item): void {
        this.selection = item;
    }

    gotoDetail(): void {
        this.router.navigate(['/item', this.selection.id]);
    }
}
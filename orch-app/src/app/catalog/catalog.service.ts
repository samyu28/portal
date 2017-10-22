import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Item } from './item';
import { ITEMS } from './mock-catalog';

@Injectable()
export class CatalogService {

    getItems(): Promise<Item[]> {
        return Promise.resolve(ITEMS);
        // TODO: fix server communication
        // server response delay is breaking catalog
    }

    getItem(id: number): Promise<Item> {
        return this.getItems()
            .then(items => items.find(item => item.id === id));
    }
}
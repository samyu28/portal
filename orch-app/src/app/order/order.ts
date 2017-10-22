
import { FormField } from '../dynform/formfield'

export class Order {
    id?: number;
    itemId: number;
    state?: string;
    orderedBy: string;
    orderedOn: number;
    fields: FormField[];
}

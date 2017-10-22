
import { FormField } from '../dynform/formfield';

export class Item {
    id: number;
    name: string;
    icon: string;
    desc: string;
    state: string;
    version: number;
    createdBy: string;
    createdOn: string;
    fields: FormField[];
}
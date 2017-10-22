
export class FormField {
    name: string;
    label: string;
    type: string;
    hidden?: boolean;
    disabled?: boolean;
    required?: boolean;
    value?: string;
    defval?: string;
    minval?: number;
    maxval?: number;
    minlen?: number;
    maxlen?: number;
    pattern?: string;
    listval?: string[];
}
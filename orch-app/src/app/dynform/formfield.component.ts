import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, NgForm, Validators, ValidationErrors } from '@angular/forms';

import { FormField } from './formfield';

@Component({
    selector: 'formfield',
    templateUrl: './formfield.component.html'
})
export class FormFieldComponent  {
    @Input() field: FormField;
    @Input() form: FormGroup;
    
    
    

        
}
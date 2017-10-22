import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { FormField } from './formfield';

@Injectable()
export class DynamicFormService {

    constructor() { }

    render(fields: FormField[]) {

        let fcontrol = {};
        
                fields.forEach(field => {
        
                    let validators = [];
        
                    // this applies to all types, including checkbox and list
                    if (field.required) {
                        validators.push(Validators.required);
                    }
        
                    // now to specific types
                    switch (field.type) {
        
                        case 'text': {
                            if (field.minlen) {
                                validators.push(Validators.minLength(field.minlen));
                            }
                            if (field.maxlen) {
                                validators.push(Validators.maxLength(field.maxlen));
                            }
                            if (field.pattern) {
                                validators.push(Validators.pattern(field.pattern));
                            }
                           
                            break
                        } // case text
        
                        case 'number': {
                            validators.push(Validators.pattern('[0-9]*'));
                            if (field.minval) {
                                validators.push(Validators.min(field.minval));
                            }
                            if (field.maxval) {
                                validators.push(Validators.max(field.maxval));
                            }
                            break
                        } // case number
        
                        //TODO: Add more types
                        default: { break; };
                    }
        
                    fcontrol[field.name] = new FormControl((field.value ? field.value : field.defval), Validators.compose(validators));
                   
                  
                });

       return new FormGroup(fcontrol);
    }
    }
import { Injectable } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormvalidationService {
  constructor() { }
  userForms: FormGroup=new FormGroup({
    userName: new FormControl('',[Validators.required,Validators.minLength(5)]),
    fatherName: new FormControl('',[Validators.required,Validators.maxLength(10)]),
    motherName: new FormControl('',[Validators.required,Validators.maxLength(10)]),
    passWord: new FormControl('',[Validators.required,Validators.minLength(8)]),
    Address: new FormControl('',Validators.required),
    pinCode: new FormControl('',[Validators.required,Validators.minLength(6)]),
  });
}

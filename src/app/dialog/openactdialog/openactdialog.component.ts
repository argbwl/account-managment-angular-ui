import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { AccoutserviceService } from 'src/app/service/accoutservice.service';

@Component({
  selector: 'app-openactdialog',
  templateUrl: './openactdialog.component.html',
  styleUrls: ['./openactdialog.component.css']
})
export class OpenactdialogComponent implements OnInit {

  acctTypeList = ["Saving","Current"];
  genderTypeList = ["Male","Female","Trans"];

  openAccountForm !: FormGroup;

  
  constructor(private formBuilder: FormBuilder,
    private accountService : AccoutserviceService,
    private dialogRef : MatDialogRef<OpenactdialogComponent>,
    private router : Router,
    private activatedRoute : ActivatedRoute) {

  }

  loadAccountForm(){
    this.openAccountForm = this.formBuilder.group({
      firstName : ['',Validators.required],
      lastName : [],
      middleName : [],
      state : [],
      city : ['',Validators.required],
      pincode: ['',Validators.required],
      address: [],
      acctType: [],
      gender: [],
      dob:['',Validators.required],
      pob: [],
      contactNo: []
    })
  }

  ngOnInit(): void {
    this.loadAccountForm();

  }

  openNewAccount(){
    console.log(this.openAccountForm.value);
    if(this.openAccountForm.valid){
      console.log("Form is valid");
      this.accountService.addNewAccount(this.openAccountForm.value)
                         .subscribe({
                            next:(res)=>{
                              alert("Account Open Form Submitted");
                              this.openAccountForm.reset();
                              this.dialogRef.close('save');
                              this.router.navigate(["openAct"],{relativeTo: this.activatedRoute});
                            },
                            error:()=>{
                              alert("Account Open Form Failed to Submit, Please Try After some Time")
                            }
                         })
    }else{
      alert("Form is not valid, Please Check Mandotary fields");
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { AccoutserviceService } from 'src/app/service/accoutservice.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-openactdialog',
  templateUrl: './openactdialog.component.html',
  styleUrls: ['./openactdialog.component.css']
})
export class OpenactdialogComponent implements OnInit {

  acctTypeList = ["Saving","Current"];
  genderTypeList:Array<string> = ["Male","Female","Trans"];
  namePrefix = ["Mr.","Ms.","Mrs."];
  actModel:string="";
  nmPrefix:string="";
  selectedStt:string="";
  fthrInputSelected:boolean=true;
  hsbndInputSelected:boolean=false;
  isActRetrieved:boolean=false;
  sttList:any;
  ctyList:any;

  //sttList = new Observable<Array<{ name: string; }>>();

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
      contactNo: [],
      fatherName : [],
      husbandName : [],
      prefix:[],
      actNum:[]
    })
  }

  ngOnInit(): void {
    console.log(this.loadStateByCountry("India"));
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
                              this.sttList=[];
                              this.ctyList=[];
                              //this.router.navigate(["openAct"],{relativeTo: this.activatedRoute});
                            },
                            error:(er)=>{
                              alert("Account Open Form Failed to Submit, Please Try After some Time");
                              this.sttList=[];
                              this.ctyList=[];
                              console.log(er.error);
                            }
                         })
    }else{
      alert("Form is not valid, Please Check Mandotary fields");
    }
  }

  onSelectChange(val:any){
    console.log("start value "+val);
    if(val=="Mr."){
      console.log(val); 
      this.genderTypeList = ["Male","Trans"];
      this.fthrInputSelected=true;
      this.hsbndInputSelected=false;
      
    }else if(val=="Mrs."){
      console.log(val);
      this.genderTypeList = ["Female","Trans"];
      this.fthrInputSelected=false;
      this.hsbndInputSelected=true;
    }else if(val=="Ms."){
      console.log(val);
      this.genderTypeList = ["Female","Trans"];
      this.fthrInputSelected=true;
      this.hsbndInputSelected=false;
    }
  }

  loadStateByCountry(cntry:string){
    if(cntry){
      this.accountService.getStateListByCountry(cntry)
                          .subscribe(data=> {
                              this.sttList=data;
                          },
                          err =>{
                            console.log(err);
                          })
    }
  }

  loadCities(state:any){
    if(state){
      this.accountService.getCityListByState(state)
                          .subscribe(data=> {
                              this.ctyList=data;
                          },
                          err =>{
                            console.log(err);
                          })
    }
  }

}

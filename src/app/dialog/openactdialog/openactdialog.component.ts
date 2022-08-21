import { AfterContentChecked, Component, OnInit } from '@angular/core';
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
export class OpenactdialogComponent implements OnInit, AfterContentChecked {

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
  serverRes:any;
  formSubmitionInProgress:boolean;
  isActVerifyInProgress:boolean;
  spanMessage:string="";
  cntctNo:string="";

  //sttList = new Observable<Array<{ name: string; }>>();

  openAccountForm !: FormGroup;

  
  constructor(private formBuilder: FormBuilder,
    private accountService : AccoutserviceService,
    private dialogRef : MatDialogRef<OpenactdialogComponent>,
    private router : Router,
    private activatedRoute : ActivatedRoute) {

  }

  ngOnInit(): void {
    this.loadStateByCountry("India");
    this.formSubmitionInProgress=false;
    this.loadAccountForm();
    this.cntctNo="";
  }

  ngAfterContentChecked(): void {
    /*console.log("ngAfterContentChecked");*/
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
    });
  }

  openNewAccount(){
    this.formSubmitionInProgress=true;
    this.spanMessage="Account opening is in progress..."
    console.log(this.openAccountForm.value);
    if(this.openAccountForm.valid){
      console.log("Form is valid");
      this.openAccountForm.disable();
      this.accountService.addNewAccount(this.openAccountForm.value)
                         .subscribe({
                            next:(res)=>{
                              this.openAccountForm.reset();
                              this.dialogRef.close('save');
                              this.formSubmitionInProgress=false;
                              this.sttList=[];
                              this.ctyList=[];
                              //this.router.navigate(["openAct"],{relativeTo: this.activatedRoute});
                              console.log("Response from server for Account opening >> "+res.accNo);
                              this.serverRes=res;
                              console.log(this.serverRes);
                              alert("Account Open Form Submitted,\nAccount No: "+res.accNo);
                              
                            },
                            error:(er)=>{
                              alert("Account Open Form Failed to Submit, Please Try After some Time");
                              this.spanMessage="Account Open Form failed to submit, Please try again in some times";
                              // this.sttList=[];
                              // this.ctyList=[];
                              this.formSubmitionInProgress=false;
                              this.openAccountForm.enable();
                              console.log(er.error);
                            }
                         })
    }else{
      //alert("Form is not valid, Please Check Mandotary fields");
      this.spanMessage="Form is not valid, Please Check Mandotary fields"
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

  verifyAccount(contactNo:any){
    this.spanMessage="";
    if(contactNo.value && contactNo.value===this.cntctNo && this.cntctNo.length>=10){
      console.log("Contact No and firstName to verify Act : "+this.cntctNo);
      this.isActVerifyInProgress=true;
      this.openAccountForm.disable();
      this.spanMessage="Verifing account no based on contact no...";
      this.accountService.verifyActByContactNo(contactNo.value)
                          .subscribe(data=> {
                              this.isActVerifyInProgress=false;
                              console.log("data response "+data);
                              this.spanMessage="Verified!";
                              if(false===data){
                                this.spanMessage="[SUCCESS] Verified! No account is registered with contact no "+contactNo.value;
                              }else{
                                this.cntctNo="";
                                this.spanMessage="[FAILED]! Account is already registered with contact no "+contactNo.value;
                              }
                              this.openAccountForm.enable();
                          },
                          err =>{
                            console.log(err);
                            this.isActVerifyInProgress=false;
                            this.openAccountForm.enable();
                          })
    }
    
  }

}

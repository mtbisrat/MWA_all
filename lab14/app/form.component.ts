import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { UserInfoService } from './user-info.service';
import { Router } from '@angular/router';


export class User{
  email:string="";
  name:string="";
  post:string="";
}

@Component({
  selector: 'user-form',
  template: `
  <form [formGroup]="myForm" (ngSubmit)="onSubmit()">
    <div formGroupName="userData">
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text"
              class="form-control"
              id="name"
              formControlName="name">
        <div *ngIf="!myForm.controls['userData']['controls']['name'].valid">
              Required
        </div>
      </div>
      <div class="form-group">
      <label for="email">E-Mail</label>
      <input type="text"
             class="form-control"
             id="email"
             formControlName="email">
      <div *ngIf="!myForm.controls['userData']['controls']['email'].valid">
        Required
      </div>
    </div>

    <div class="form-group">
        <label for="post">Post</label>
        <textarea type="text"
                  class="form-control"
                  id="post"
                  formControlName="post"
                  cols="8"
                  rows="4">
        </textarea>
        <div *ngIf="!myForm.controls['userData']['controls']['post'].valid">
          Minimum length 10
        </div>
    </div>
  </div>

    <button type="submit" class="btn btn-primary" [disabled]="!myForm.valid">Submit</button>
    <button type="button" class="btn btn-default" (click)="onGetData()">Get Data</button>
    <router-outlet></router-outlet>

    </form>
  `,
  styles: []
})
export class FormComponent {

  userInfo:User=new User();
  myForm: FormGroup;
  constructor(private formBuilder: FormBuilder, 
    private userInfoService: UserInfoService, 
    private router: Router) { 
    this.myForm=formBuilder.group({
      'userData':formBuilder.group({
        'name':['', [Validators.required]],
        'email': ['', [Validators.required, 
          Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
        ]],
        'post':['', [Validators.required, Validators.minLength(10)]]
      })
    })
  }

  emailValidator(control: FormControl):{[s:string]:boolean}{
    Validators.pattern
    if(control.value===''){
      return {email:true};
    }
    return null;
  }

  onGetData(){
    this.userInfoService.getUserInfo().subscribe((userData)=>{      
        this.userInfoService.getPosts().subscribe((posts)=>{
          this.myForm.patchValue({userData:{name: userData['name']}});
          this.myForm.patchValue({userData:{email: userData['email'].toLowerCase()}});
          this.myForm.patchValue({userData:{post: posts[0]['title']}});
        });
    });
  }

  onSubmit() {
    console.log('Reactive Form Data: ');
    console.log(this.myForm.value);
    
    this.router.navigateByUrl('/success');
  }
}

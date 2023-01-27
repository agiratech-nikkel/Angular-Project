import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl,Validators,FormGroup } from '@angular/forms';
import { AuthService } from '@app/code/auth.service';
import { CustomIconsService } from '@app/code/icon.service';
@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EntryComponent implements OnInit {

  issingup:boolean = true;

  constructor(
    public authService: AuthService,
    public iconService:CustomIconsService
  ) { }

   loginForm = new FormGroup({
    email: new FormControl(null,[Validators.required,Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)]),
    password: new FormControl (null,[Validators.required,Validators.pattern(  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)])
  });

  regsisterForm = new FormGroup({
    email: new FormControl(null,[Validators.required,Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)]),
    username: new FormControl(null,[Validators.required]),
    password: new FormControl (null,[Validators.required,Validators.pattern(  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]),
    confirmpassword: new FormControl (null,[Validators.required,Validators.pattern(  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)])

  })

  ngOnInit() {}

  onSubmit(){
    if(this.loginForm.valid){
      this.authService.SignIn(this.loginForm.controls['email'].value || '',this.loginForm.controls['password'].value || '')
    }
  }

  onRegsister(){
    if(this.regsisterForm.valid){
    let isconfirmed = this.regsisterForm.controls['password'].value === this.regsisterForm.controls['confirmpassword'].value
      if( isconfirmed){
        this.authService.SignUp(this.regsisterForm.controls['email'].value || '', this.regsisterForm.controls['confirmpassword'].value || '')
      }
    }
  }
}

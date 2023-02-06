import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthserviceService } from '../../services/authservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  uname: any
  mail: any
  mobile: any
  UserCode: any
  pswd: any
  pswd2: any

  registerForm = this.fb.group({
    uname: ['', [Validators.required]],
    mail: ['', [Validators.required]],
    mobile: ['', [Validators.required]],
    pswd: ['', [Validators.required]]
  })

  constructor(private ds: AuthserviceService, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  registerfun() {
    var uname = this.registerForm.value.uname
    var email = this.registerForm.value.mail
    var mob = this.registerForm.value.mobile
    var password = this.registerForm.value.pswd
    var cpassword =  this.registerForm.value.pswd
    console.log("1",uname, email, mob, password,cpassword)

    if (this.registerForm.valid) {
      console.log("1",uname, email, mob, password,cpassword)
      this.ds.register(uname, email, mob, password,cpassword)

        .subscribe((result:any) => {
          console.log("result:", result);

          if (result) {
            alert(result.message)
            this.router.navigateByUrl('')
          }
        }, (result) => {
          console.log("test", result.error.message)
          alert(result.error.message)
        })
    }
  }
}

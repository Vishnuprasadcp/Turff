import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from '../../services/authservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  mail: any = "Enter Your Email Address"
  password: any="Enter the password"

  mailId: any
  pswd: any
  constructor(private router: Router, private ds: AuthserviceService) {

  }
  ngOnInit(): void {

  }
  login() {
    var email: any = this.mailId
    var pswd: any = this.pswd

    this.ds.servicelogin(email, pswd)

      .subscribe((result: any) => {
        console.log(result)
        // alert(result.message)
        localStorage.setItem("Email", JSON.stringify(result.currentemail))
        localStorage.setItem("Name", JSON.stringify(result.currentname))
        localStorage.setItem("Usercode", JSON.stringify(result.currentusercode))
        this.router.navigateByUrl('home')
      }, (result: any) => {
        alert(result.error.message)
      })
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor(private http:HttpClient) { }

  register(name: any, email: any, mobile: any,password:any, cpassword:any) {
    const data = {
      name,
      email,
      mobile,
      // User_code,
      password,
      cpassword
      
    }
    return this.http.post("http://localhost:3000/register", data)

  }


  servicelogin(email: any, password: any) {
    const data = {
      email,
      password
    }
    return this.http.post("http://localhost:3000/login",data)
  }
}
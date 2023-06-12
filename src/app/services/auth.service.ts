import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router, private http:HttpClient) { }

  isAuthenticated():boolean{
    if(sessionStorage.getItem('token')!==null){
      return true;
    }
    return false;
  }

   canAccess() {
     if(!this.isAuthenticated()) {
      this.router.navigate(['/signin']);
     }
   }

   canAuthenticate() {
    if(this.isAuthenticated()) {
      this.router.navigate(['/dashboard']);
     }
   }

   signup(name:string,email:string,password:string) {
    return this.http.post<{idToken:string}>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBgzle9rwp4VJAZdwSvlt6TgasASmrH7YQ',
    {diplayName:name,email,password}
    );
   }

   storeToken(token:string) {
    sessionStorage.setItem('token',token);
   }

   removeToken() {
    sessionStorage.removeItem('token');
   }

   login(email:string,password:string) {
    return this.http.post<{idToken:string}>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBgzle9rwp4VJAZdwSvlt6TgasASmrH7YQ',
    {email,password})
   }

}

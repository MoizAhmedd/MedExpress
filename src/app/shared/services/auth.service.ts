import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public createAccount() {
    console.log("An account has been created");
    return true;
  }
}

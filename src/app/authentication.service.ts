import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private authStatus = new Subject<boolean>()
  get userStatus(): Observable<boolean> {
    return this.authStatus.asObservable()
  }
  login(user: object): object {
    this.authStatus.next(true)
    console.log(user)
    return user
  }
  signup(user: object): object {
    this.authStatus.next(true)
    console.log(user)
    return user
  }
  logout() {
    this.authStatus.next(false)
  }
}

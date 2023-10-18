import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/authentication.service';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  authStatus: boolean = false
  loginForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.minLength(8)])
  })
  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.authService.userStatus.subscribe(userstatus => {
      this.authStatus = userstatus
    })
  }
  login() {
    console.log(this.loginForm.value)
    this.authService.signup(this.loginForm.value)
    if (this.authStatus) {
      this.router.navigate(['/'], { relativeTo: this.route })
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/authentication.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  authStatus: boolean = false
  registerForm = new FormGroup({
    fullName: new FormControl(null, [Validators.required, Validators.minLength(8)]),
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

  register() {
    console.log(this.registerForm.value)
    this.authService.signup(this.registerForm.value)
    if (this.authStatus) {
      this.router.navigate(['/'], { relativeTo: this.route })
    }
  }
}

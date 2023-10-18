import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/authentication.service';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isSearchOpen = false
  authStatus: boolean = false
  constructor(
    private authService: AuthenticationService,
    private route: ActivatedRoute,
    private router: Router) { }
  ngOnInit(): void {
    this.authService.userStatus.subscribe(userstatus => {
      this.authStatus = userstatus
    })
  }
  toggleSearch() {
    this.isSearchOpen = !this.isSearchOpen
  }
}

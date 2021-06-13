import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from './_services/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular11JwtAuth';

  private roles: string[] = [];
  isLoggedIn = false;
  showHrBoard = false;
  showManagerBoard = false;
  showUserBoard= false ;
  username?: string;

  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      this.showUserBoard = this.roles.includes('USER');
      this.showHrBoard = this.roles.includes('HR');
      this.showManagerBoard = this.roles.includes('MANAGER');

      this.username = user.username;
    }
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}

import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonButtons, IonIcon, IonNavLink, IonSegment, IonSegmentButton, IonList, IonLabel, IonCol, IonRow, IonImg, IonGrid, IonText, IonFooter, IonFab, IonFabButton, IonFabList, IonSpinner } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonSpinner, IonFabList, IonFabButton, IonFab, IonFooter, IonText, IonGrid, IonImg, IonRow, IonCol, IonLabel, IonList, IonSegmentButton, IonSegment, IonNavLink, IonIcon, IonButtons, IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class HomePage implements OnInit {


  constructor() { }

  ngOnInit() {
  }
  authService = inject(AuthService);
  router = inject(Router);
  
  goRegister()
  {
    this.router.navigateByUrl("/registro");
  }

  goLogin()
  {
    this.router.navigateByUrl("/login");
  }

  goHome()
  { 
    this.router.navigateByUrl("/home");
  }
  logout() : void
  {
    this.authService.logout();
    this.router.navigateByUrl("/login");
  } 

  goChat4A() {
    this.router.navigateByUrl('/chat4a');
  }

  goChat4B() {
    this.router.navigateByUrl('/chat4b');
  }


}

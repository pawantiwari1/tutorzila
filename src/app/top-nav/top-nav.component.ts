import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { MatDialog } from '@angular/material/dialog';
import { Router, RouterOutlet,RouterLink } from '@angular/router';

@Component({
  selector: 'app-top-nav',
  standalone: true,
  imports: [CommonModule, LoginComponent,RouterOutlet],
  templateUrl: './top-nav.component.html',
  styleUrl: './top-nav.component.scss',
})
export class TopNavComponent implements OnInit {
  constructor(public dialog: MatDialog,private renderer: Renderer2,private router: Router) {
   
  }
  @ViewChild('menuOption') myDiv!: ElementRef;

  isVisible=false;
  navMenu:any;
  isScrolled = false;
  menus = true;



  toggleMenu(){
    this.isVisible=!this.isVisible;
   
    if(this.isVisible==true){
      this.renderer.removeClass(this.myDiv.nativeElement, 'collapse');
    }else{
      this.renderer.addClass(this.myDiv.nativeElement, 'collapse');
    }
  }

  ngOnInit(): void {
    this.navMenu = document.querySelector('.nav-menu');
  }
  expandMenus() {
    console.log('menus ', this.menus);
    this.menus = !this.menus;
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.scrollY > 40) {
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }
  }

  openLoginPopup() {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '700px', // You can set the width and height of the dialog
      panelClass: 'login_popup_panelclass',
      backdropClass: 'create_login_backdrop_class',
      data: { message: 'This is a message passed to the popup' }, // Pass data if needed
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
  navigateToDashboard(routeURL:any) {
    this.router.navigate([routeURL]);
  }



}

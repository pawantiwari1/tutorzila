import { CommonModule } from '@angular/common';
import { Component, HostListener, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TopNavComponent } from '../top-nav/top-nav.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { RouterOutlet } from '@angular/router';
import { BrandingComponent } from '../branding/branding.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, TopNavComponent, DashboardComponent,RouterOutlet,BrandingComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent implements OnChanges, OnInit {

  constructor() {

  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("ng on change")
  }
  ngOnInit(): void {

  }


  getHeightofTopBar() {
    document.getElementById("top-bar")
  }

  // $(window).scroll(function () {
  // 	if ($('#main-header').offset().top > 50) {
  // 		$('#main-header').addClass('nav-white');
  // 	} else {
  // 		$('#main-header').removeClass('nav-white');
  // 	}
  // });
  // $('.collapse').on('shown.bs.collapse', function () {
  // 	$(this).parent().find('.ti-plus').removeClass('ti-plus').addClass('ti-minus');
  // }).on('hidden.bs.collapse', function () {
  // 	$(this).parent().find('.ti-minus').removeClass('ti-minus').addClass('ti-plus');
  // });
}

import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  @ViewChild('menuOption') myDiv!: ElementRef;

  ngOnInit(): void {
    debugger
    const data =  document.getElementById("navigation")
    console.log(data);
  }
  constructor(private renderer: Renderer2){

  }
  isVisible=false;
  toggleMenu(){
    this.isVisible=!this.isVisible;
   
    if(this.isVisible==true){
      this.renderer.removeClass(this.myDiv.nativeElement, 'collapse');
    }else{
      this.renderer.addClass(this.myDiv.nativeElement, 'collapse');
    }
  }
}

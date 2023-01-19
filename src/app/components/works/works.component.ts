import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // owl-carousel 
  customOptions: OwlOptions = {
    loop: true,
    // center: true,
    dots: true,
    nav: false,
    autoWidth: true,
    rtl: true,
    items: 2.5,
    margin: 20,
    autoplay: false,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      300: {
        items: 1.5,
      },
      600: {
        items: 2.5,
      },
      1000: {
        items: 2.5,
      },
    },
  };
}

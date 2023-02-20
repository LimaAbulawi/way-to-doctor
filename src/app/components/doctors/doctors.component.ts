import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { DoctorsService } from 'src/app/services/doctors.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.scss']
})
export class DoctorsComponent implements OnInit {

  response: any;
  basicUrl = "//waytodoctor.wecan.work/public";

  constructor(private ser: DoctorsService) { }

  ngOnInit(): void {
    this.getListFromService();
  }
  getListFromService() {
    return this.ser.getList().subscribe((res: any) => {
      this.response = res.data;
    })
  }

  // owl-carousel 
  customOptions: OwlOptions = {
    loop: true,
    // center: true,
    dots: false,
    nav: false,
    autoWidth: true,
    rtl: true,
    items: 5,
    margin: 20,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      300: {
        items: 2,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  };

}

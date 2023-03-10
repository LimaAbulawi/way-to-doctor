import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import swal from 'sweetalert';


@Component({
  selector: 'app-call-us',
  templateUrl: './call-us.component.html',
  styleUrls: ['./call-us.component.scss']
})
export class CallUsComponent implements OnInit {

  Form = this.fb.group({
    user_name: ['', Validators.required],
    user_email: ['', Validators.required],
    message: ['', Validators.required]
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  public sendEmail(e: Event) {
    if (!this.Form.valid) {
      this.Form.markAllAsTouched();
      return;
    }
    // e.preventDefault();
    emailjs.sendForm('service_d4j14ne', 'template_ubov4to', e.target as HTMLFormElement, 'BsucEti5Ae3z-3OM0')
      .then((result: EmailJSResponseStatus) => {
        swal("Good job!", "Your email was sent", "success");
      }, (error) => {
        swal("Oh noes!", "The AJAX request failed!", "error");
      });
  }


}

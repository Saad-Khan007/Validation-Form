import { Component } from '@angular/core';

@Component({
  selector: 'app-validation-form',
  templateUrl: './validation-form.component.html',
  styleUrls: ['./validation-form.component.css']
})
export class ValidationFormComponent {
  title = 'validation-Form';
  phoneVal: boolean = false;
  msg: string = '';
  err: string = '';
  e: any;
  p: any;
  mailformat: any = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  phoneFormat: any = /^03\d{9}$/;
  validateForm(phoneNumber: string, emailAddress: string) {
    if (phoneNumber != '' && emailAddress != '') {
      if (this.validateEmail(emailAddress) == true && this.validatePhone(phoneNumber) == true) {
        this.msg = "Form Accepted";
        this.msgPass(this.msg);
        this.e = '';
        this.p = '';
      }
    } else {
      this.err = "Form is Invalid.";
      this.errPass(this.err);
      return;
    }

  }
  msgPass(msg: any) {
    this.msg = msg;
    setTimeout(() => {
      this.msg = "";
    }, 3000)
  }
  errPass(err: any) {
    this.err = err;
    setTimeout(() => {
      this.err = "";
    }, 3000)
  }
  validateEmail(e: any) {
    if (e.match(this.mailformat)) {
      this.msg = "Valid email address.";
      this.msgPass(this.msg);
      return true;
    }
    else {
      this.err = "Invalid email address.";
      this.errPass(this.err);
      return false;
    }

  }
  validatePhone(e: any) {
    if (this.phoneFormat.test(e)) {
      this.msg = "Valid phone number.";
      this.msgPass(this.msg);
      return true;
    }
    else {
      this.err = "Invalid phone number.";
      this.errPass(this.err);
      return false;
    }

  }
}

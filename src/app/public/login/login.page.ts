import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  fg: FormGroup;
  constructor(
    public router: Router,
    private formBuilder: FormBuilder,
    private loadingController: LoadingController,
  ) {
    this.fg = this.formBuilder.group({
      'email': [null, Validators.required],
      'Password': [null, Validators.required],
    });
  }

  login(){
    console.log("ckilkkkkkkk");
    this.router.navigate(['/members']);
  }
  ngOnInit() {
  }

}

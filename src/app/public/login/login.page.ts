import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { LoginService } from 'src/app/services/login.service';
import { ToastService } from 'src/app/shared/toast.service';

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
    private loginservice: LoginService,
    private toastService: ToastService,
  ) {
    this.fg = this.formBuilder.group({
      'email': [null, Validators.required],
      'Password': [null, Validators.required],
    });
  }

   async login() {
    //this.router.navigate(['/members']);
    const loading = await this.loadingController.create({
      message: 'Loading'
    });
    await loading.present();
    await this.loginservice.getAllUser()
      .subscribe(res => {
        if (res.IsSuccess) {
          loading.dismiss();
          console.log("true");
        }
        else {
          loading.dismiss();
          console.log("true");
        }
      }, (err) => {
        loading.dismiss();
        this.toastService.create(err, 'danger');
      });
  }
  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { LoginService } from 'src/app/services/login.service';
import { ToastService } from 'src/app/shared/toast.service';
import { Storage } from '@ionic/storage-angular';

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
    private storage: Storage,
  ) {
    this.fg = this.formBuilder.group({
      'email': [null, Validators.required],
      'password': [null, Validators.required],
      'userType': [null, Validators.required],
    });
  }

  login1() {
    console.log(this.fg.value);
  }
  async login() {
    //this.router.navigate(['/members']);
    const loading = await this.loadingController.create({
      message: 'Loading'
    });
    await loading.present();
    await this.loginservice.checkAuth(this.fg.value)
      .subscribe(res => {
        if (res.success) {
          this.storage.create();
          this.storage.set("UserID", res.data.id);
          loading.dismiss();
          if (res.data.userType == 'Student') {
            console.log('student');
            this.router.navigate(['/student/quizlist']);
          }
          else {
            this.router.navigate(['/quizlist']);
          }

        }
        else {
          loading.dismiss();
          this.toastService.create(res.message);
        }
      });
  }
  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { SignupService } from 'src/app/services/signup.service';
import { ToastService } from 'src/app/shared/toast.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  private registrationData: FormGroup;
  constructor(
    public router: Router,
    private formBuilder: FormBuilder,
    private loadingController: LoadingController,
    private toastService: ToastService,
    private Signupservice: SignupService,
  ) {
    this.registrationData = this.formBuilder.group({
      // firstName: [''],
      // lastName: [''],
      email: new FormControl(
        "",
        Validators.compose([
          // Validators.required,
          Validators.pattern(
            "^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$"
          )
        ])
      ),
      password: [''],
      userType: ['']
    })
  }

  ngOnInit() {
  }

  async RequestForRegistration() {

    const loading = await this.loadingController.create({
      message: 'Loading'
    });
    await loading.present();
    await this.Signupservice.adduser(this.registrationData.value)
      .subscribe(res => {
        if (res.IsSuccess) {
          loading.dismiss();
          this.toastService.create('Succfully Rigister');
        }
        else {
          loading.dismiss();
          this.toastService.create('Succfully Rigister');
        }
      }, (err) => {
        loading.dismiss();
        this.toastService.create(err, 'danger');
      });
  }

}

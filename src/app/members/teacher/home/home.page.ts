import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { QuizService } from 'src/app/services/quiz.service';
import { ToastService } from 'src/app/shared/toast.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  user_ID: any;
  Quizzes: any;
  editQuizdata: any;
  Quizdata: any;
  constructor(
    public router: Router,
    private formBuilder: FormBuilder,
    private loadingController: LoadingController,
    private quizservice: QuizService,
    private toastService: ToastService,
    private storage: Storage,
    private FormBuilder: FormBuilder,
    private alertCtrl: AlertController,
  ) {
    this.editQuizdata = this.FormBuilder.group({
      'name': [null],
      'allowedTime': [null],
      'allowedAttempts': [null],
      'id': [null],
      'createdById': [null],
      'type': ['mcq'],
      'assignedGroupId': ['1']
    })
  }

  ngOnInit() {
    this.storage.create();
    this.storage.get('UserID').then((userID) => {
      this.user_ID = userID;
    });
    this.getAllQuiz();
  }

  async getAllQuiz() {
    //this.router.navigate(['/members']);
    const loading = await this.loadingController.create({
      message: 'Loading'
    });
    await loading.present();
    await this.quizservice.getAllQuiz()
      .subscribe(res => {
        if (res.success) {
          this.Quizzes = res.data;
          loading.dismiss();
        }
        else {
          loading.dismiss();
          this.toastService.create(res.message);
        }
      });
  }

  async EditQuiz(id) {
    //this.router.navigate(['/members']);
    const loading = await this.loadingController.create({
      message: 'Loading'
    });
    await loading.present();
    await this.quizservice.getQuizByID(id)
      .subscribe(res => {
        if (res.success) {
          this.Quizdata = res.data;
          this.editQuizdata.controls['name'].setValue(this.Quizdata.name);
          this.editQuizdata.controls['allowedTime'].setValue(this.Quizdata.allowedTime);
          this.editQuizdata.controls['allowedAttempts'].setValue(this.Quizdata.allowedAttempts);
          this.editQuizdata.controls['id'].setValue(this.Quizdata.id);
          this.editQuizdata.controls['createdById'].setValue(this.Quizdata.createdById);
          loading.dismiss();
          this.EditBtnAlert();
        }
        else {
          loading.dismiss();
          this.toastService.create(res.message);
        }
      });
  }

  Quizlist(val) {
    this.storage.set("select_quizid", val);
    this.router.navigate(['/Teacher/mcqlist']);
  }

  async EditBtnAlert() {
    //console.log(this.editQuizdata.value);

    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Confirm!',
      message: 'Are you sure you want to edit this qiuz name?',

      inputs: [
        {
          name: 'Name',
          type: 'text',
          value: this.editQuizdata.value.name
        },
        {
          name: 'maxtime',
          type: 'number',
          value: this.editQuizdata.value.allowedTime

        },
        {
          name: 'maxattempts',
          type: 'number',
          value: this.editQuizdata.value.allowedAttempts
        }
      ],

      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (value: any) => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Okay',

          handler: (value: any) => {
            //console.log('Confirm Okay', value);
            this.editQuizdata.value.name = value.Name;
            this.editQuizdata.value.allowedTime = value.maxtime;
            this.editQuizdata.value.allowedAttempts = value.maxattempts;

            this.EditQuizRequest();
          }
        }
      ]
    })
    await alert.present()
  }

  async EditQuizRequest() {
    //this.router.navigate(['/members']);
    const loading = await this.loadingController.create({
      message: 'Loading'
    });
    await loading.present();
    await this.quizservice.editQuiz(this.editQuizdata.value)
      .subscribe(res => {
        if (res) {
          loading.dismiss();
          this.getAllQuiz();
          this.toastService.create("Succfully update");
        }
        else {
          loading.dismiss();
          this.toastService.create("something is wrong");
        }
      });
  }

  async deleteBtnAlert(quizid) {

    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Confirm!',
      message: 'Are you sure you want to delete this quiz?',

      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (value: any) => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Okay',
          handler: (value: any) => {
            console.log('Confirm Okay');
            //this.deleteBtn(quizid);

          }
        }
      ]
    })
    await alert.present()
  }

}

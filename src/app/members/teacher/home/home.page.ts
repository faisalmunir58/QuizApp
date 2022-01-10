import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { LoginService } from 'src/app/services/login.service';
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
      'maxtime': [null],
      'maxattempts': [null],
      'id': [null],
      'userId': [null]
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
          console.log(res.data)
          this.Quizzes = res.data;
          console.log(this.Quizzes);
          loading.dismiss();
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

  async EditBtnAlert(quizid) {
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
          value: this.editQuizdata.value.maxattempts

        },
        {
          name: 'maxattempts',
          type: 'number',
          value: this.editQuizdata.value.maxtime
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
            this.editQuizdata.value.maxtime = value.maxtime;
            this.editQuizdata.value.maxattempts = value.maxattempts;
            console.log(this.editQuizdata.value)

            //this.EditQuizRequest();
          }
        }
      ]
    })
    await alert.present()
  }

  QuizData(quizid) {
    console.log("get one quiz data for edit")

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

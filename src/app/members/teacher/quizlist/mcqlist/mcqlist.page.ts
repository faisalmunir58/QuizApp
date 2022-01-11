import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { MCQService } from 'src/app/services/mcq.service';
import { QuestionService } from 'src/app/services/question.service';
import { ToastService } from 'src/app/shared/toast.service';

@Component({
  selector: 'app-mcqlist',
  templateUrl: './mcqlist.page.html',
  styleUrls: ['./mcqlist.page.scss'],
})
export class MCQlistPage implements OnInit {

  Questions: any;

  selected_quizid:any;
  
  constructor(
    public router: Router,
    private formBuilder: FormBuilder,
    private loadingController: LoadingController,
    private questionservice: QuestionService,
    private toastService: ToastService,
    private storage: Storage,
    private FormBuilder: FormBuilder,
    private alertCtrl: AlertController,
  ) { }

  ngOnInit() {
    this.storage.create();
    this.storage.get('paperId').then((userID) => {
      console.log(userID)
      this.selected_quizid = userID;
    });
    this.getAllQuestion();
  }

  async getAllQuestion() {
    //this.router.navigate(['/members']);
    const loading = await this.loadingController.create({
      message: 'Loading'
    });
    await loading.present();
    await this.questionservice.getallQuestions()
      .subscribe(res => {
        if (res.success) {
          this.Questions = res.data;
          loading.dismiss();
        }
        else {
          loading.dismiss();
          this.toastService.create(res.message);
        }
      });
  }

  async deleteBtnAlert(questionID) {

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
          }
        }, {
          text: 'Okay',
          handler: (value: any) => {
            console.log(questionID);
            this.requestforDeleteQuestion(questionID);
            
          }
        }
      ]
    })
    await alert.present()
  }

  async requestforDeleteQuestion(id) {
    const loading = await this.loadingController.create({
      message: 'Loading'
    });
    await loading.present();
    await this.questionservice.deleteQuestion(id)
      .subscribe(res => {
        if (res.success) {
          this.getAllQuestion();
          loading.dismiss();
        }
        else {
          loading.dismiss();
          this.toastService.create(res.message);
        }
      });
  }
}

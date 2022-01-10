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
  selected_quizid = 8;
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
    this.storage.get('selected_quizid').then((userID) => {
      //this.selected_quizid = userID;
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
}

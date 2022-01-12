import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { QuizService } from 'src/app/services/quiz.service';
import { ToastService } from 'src/app/shared/toast.service';

@Component({
  selector: 'app-quizlist',
  templateUrl: './quizlist.page.html',
  styleUrls: ['./quizlist.page.scss'],
})
export class QuizlistPage implements OnInit {

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
  }

  ngOnInit() {
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

  startquiz(id) {
    console.log(id);
    this.router.navigate(['/student/mcq']);
  }

  async logout() {
    this.storage.create();
    this.storage.clear();
    this.router.navigate(['/login'])
  }
}

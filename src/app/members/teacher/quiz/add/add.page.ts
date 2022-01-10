import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { MCQService } from 'src/app/services/mcq.service';
import { ToastService } from 'src/app/shared/toast.service';
import { Storage } from '@ionic/storage';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  Quizdata: FormGroup;
  uID: any;

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
    this.Quizdata = this.formBuilder.group({
      'name': [null],
      'allowedTime': [null],
      'allowedAttempts': [null],
      'createdById': [null],
      'type': ['mcq'],
      'assignedGroupId': ['1']
    })
  }

  ngOnInit() {
    this.storage.create();
    this.storage.get('UserID').then((userID) => {
      this.uID = userID;
    });

  }

  async AddQuiz() {
    this.Quizdata.value.createdById = this.uID

    const loading = await this.loadingController.create({
      message: 'Loading'
    });
    await loading.present();
    await this.quizservice.addQuiz(this.Quizdata.value)
      .subscribe(res => {
        if (res.success) {
          console.log('true');
          loading.dismiss();
          this.router.navigate(['/members']);
        }
        else {
          loading.dismiss();
          this.toastService.create(res.message);
        }
      });
  }

}

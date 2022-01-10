import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { MCQService } from 'src/app/services/mcq.service';
import { QuestionService } from 'src/app/services/question.service';
import { ToastService } from 'src/app/shared/toast.service';

@Component({
  selector: 'app-edit-mcq',
  templateUrl: './edit-mcq.page.html',
  styleUrls: ['./edit-mcq.page.scss'],
})
export class EditMcqPage implements OnInit {

  questionID: any;
  themcqid: any;
  editQuestiondata: any;
  constructor(
    public route: ActivatedRoute,
    public router: Router,
    private formBuilder: FormBuilder,
    private loadingController: LoadingController,
    private questionservice: QuestionService,
    private toastService: ToastService,
    private storage: Storage,
    private FormBuilder: FormBuilder,
    private alertCtrl: AlertController,
  ) {
    this.editQuestiondata = this.FormBuilder.group({
      'id': [null],
      'paperId': [null],
      'question': [null],
      'answer': [null],
      'textFieldType': [null],
      'totalMarks': [null],
    })
  }

  ngOnInit() {
    this.questionID = this.route.snapshot.paramMap.get('myid');
    this.getMCQdataByID()
  }

  async getMCQdataByID() {
    const loading = await this.loadingController.create({
      message: 'Loading'
    });
    await loading.present();
    await this.questionservice.getQuestionsByID(this.questionID)
      .subscribe(res => {
        if (res.success) {
          this.editQuestiondata.controls['id'].setValue(res.data.id);
          this.editQuestiondata.controls['paperId'].setValue(res.data.paperId);
          this.editQuestiondata.controls['question'].setValue(res.data.question);
          this.editQuestiondata.controls['answer'].setValue(res.data.answer);
          this.editQuestiondata.controls['textFieldType'].setValue(res.data.textFieldType);
          this.editQuestiondata.controls['totalMarks'].setValue(res.data.totalMarks);
          loading.dismiss();
        }
        else {
          loading.dismiss();
          this.toastService.create(res.message);
        }
      });
  }

  async puteditdata() {
    const loading = await this.loadingController.create({
      message: 'Loading'
    });
    await loading.present();
    await this.questionservice.edittQuestions(this.editQuestiondata.value)
      .subscribe(res => {
        if (res.success) {
          this.router.navigate(['/mcqlist']);
          loading.dismiss();
        }
        else {
          loading.dismiss();
          this.toastService.create(res.message);
        }
      });
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { QuestionService } from 'src/app/services/question.service';
import { ToastService } from 'src/app/shared/toast.service';
import { OptionsService } from 'src/app/services/options.service';

@Component({
  selector: 'app-add-mcq',
  templateUrl: './add-mcq.page.html',
  styleUrls: ['./add-mcq.page.scss'],
})
export class AddMcqPage implements OnInit {

  paper_ID: any;
  Questiondata: any;
  optionData: any;
  constructor(
    public route: ActivatedRoute,
    public router: Router,
    public alertCtrl: AlertController,
    private formBuilder: FormBuilder,
    private loadingController: LoadingController,
    private questionservice: QuestionService,
    private optionservice: OptionsService,
    private toastService: ToastService,
    private storage: Storage,
    private FormBuilder: FormBuilder,
  ) {
    this.Questiondata = this.FormBuilder.group({
      'paperId': [null],
      'question': [null],
      'answer': [null],
      'textFieldType': ['radio'],
      'totalMarks': [null],
    });
    this.optionData = this.FormBuilder.group({
      'questionId': [null],
      'option': [null]
    })
  }

  ngOnInit() {
    this.storage.create();
    this.storage.get('paperId').then((paperID) => {
      this.paper_ID = paperID;
    });
  }

  async AddMCQ() {
    this.Questiondata.value.paperId = this.paper_ID;
    const loading = await this.loadingController.create({
      message: 'Loading'
    });
    await loading.present();
    await this.questionservice.addQuestion(this.Questiondata.value)
      .subscribe(res => {
        if (res.success) {
          loading.dismiss();
          this.toastService.create('Successfully added')
          this.router.navigate(['/mcqlist']);
        }
        else {
          loading.dismiss();
          this.toastService.create(res.message);
        }
      });
  }

}

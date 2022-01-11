import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { QuestionService } from 'src/app/services/question.service';
import { ToastService } from 'src/app/shared/toast.service';

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
          console.log(res.data)
          this.optionData.value.questionId = res.data.id
          this.alertForAddOption();
          //this.router.navigate(['/mcqlist']);
        }
        else {
          loading.dismiss();
          this.toastService.create(res.message);
        }
      });
  }

  async alertForAddOption() {
    //console.log(this.editQuizdata.value);

    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Confirm!',
      message: 'Enter Option',

      inputs: [
        {
          name: 'Name',
          type: 'text',
          value: this.optionData.value.option
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
            this.optionData.value.name = value.Name;
            this.addOptionRequest();
          }
        }
      ]
    })
    await alert.present()
  }

  async addOptionRequest() {
    const loading = await this.loadingController.create({
      message: 'Loading'
    });
    await loading.present();
    await this.questionservice.getallQuestions()
      .subscribe(res => {
        if (res) {
          loading.dismiss();
          this.toastService.create("Succfully update");
        }
        else {
          loading.dismiss();
          this.toastService.create("something is wrong");
        }
      });
  }

}

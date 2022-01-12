import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { MCQService } from 'src/app/services/mcq.service';
import { OptionsService } from 'src/app/services/options.service';
import { QuestionService } from 'src/app/services/question.service';
import { ToastService } from 'src/app/shared/toast.service';

@Component({
  selector: 'app-mcqlist',
  templateUrl: './mcqlist.page.html',
  styleUrls: ['./mcqlist.page.scss'],
})
export class MCQlistPage implements OnInit {

  quizId: any;
  Questions: any;
  OptionsData: any;
  selected_quizid: any;

  //Get value on ionChange on IonRadioGroup
  selectedRadioGroup: any;
  //Get value on ionSelect on IonRadio item
  selectedRadioItem: any;

  radio_list = [
    {
      id: '1',
      name: 'radio_list',
      value: 'radio_1',
      text: 'One',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '2',
      name: 'radio_list',
      value: 'radio_2',
      text: 'Two',
      disabled: false,
      checked: false,
      color: 'secondary'
    }, {
      id: '3',
      name: 'radio_list',
      value: 'radio_3',
      text: 'Three',
      disabled: false,
      checked: false,
      color: 'danger'
    },
  ];
  constructor(

    public route: ActivatedRoute,
    public router: Router,
    private formBuilder: FormBuilder,
    private loadingController: LoadingController,
    private questionservice: QuestionService,
    private optionservice: OptionsService,
    private toastService: ToastService,
    private storage: Storage,
    private FormBuilder: FormBuilder,
    private alertCtrl: AlertController,
  ) {

  }

  ngOnInit() {

    this.quizId = this.route.snapshot.paramMap.get('myid');
    this.getAllQuestion();
    this.getAllOptions();
  }

  radioGroupChange(event) {
    console.log("radioGroupChange", event.detail);
    this.selectedRadioGroup = event.detail;
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
          console.log(res.data);
          this.Questions = res.data;
          loading.dismiss();
        }
        else {
          loading.dismiss();
          this.toastService.create(res.message);
        }
      });
  }

  async getAllOptions() {
    //this.router.navigate(['/members']);
    const loading = await this.loadingController.create({
      message: 'Loading'
    });
    await loading.present();
    await this.optionservice.getAllOption()
      .subscribe(res => {
        if (res.success) {
          console.log(res.data);
          this.OptionsData = res.data;
          loading.dismiss();
        }
        else {
          loading.dismiss();
          this.toastService.create(res.message);
        }
      });
  }


}

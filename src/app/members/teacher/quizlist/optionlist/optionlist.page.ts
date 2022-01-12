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
  selector: 'app-optionlist',
  templateUrl: './optionlist.page.html',
  styleUrls: ['./optionlist.page.scss'],
})
export class OptionlistPage implements OnInit {

  questionid: any;
  alloptions: any;
  constructor(
    public route: ActivatedRoute,
    public router: Router,
    private formBuilder: FormBuilder,
    private loadingController: LoadingController,
    private questionservice: QuestionService,
    private toastService: ToastService,
    private storage: Storage,
    private alertCtrl: AlertController,
    private optionservice: OptionsService,
    private FormBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.questionid = this.route.snapshot.paramMap.get('myid');
    this.getAlloption();
  }

  async getAlloption() {
    //this.router.navigate(['/members']);
    const loading = await this.loadingController.create({
      message: 'Loading'
    });
    await loading.present();
    await this.optionservice.getAllOption()
      .subscribe(res => {
        if (res.success) {
          this.alloptions = res.data;
          loading.dismiss();
        }
        else {
          loading.dismiss();
          this.toastService.create(res.message);
        }
      });
  }

  async deleteOption(id) {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Confirm!',
      message: 'Are you sure you want to delete this Option?',

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
            this.deleteOptionbyid(id);

          }
        }
      ]
    })
    await alert.present()
  }
  async deleteOptionbyid(id){
    const loading = await this.loadingController.create({
      message: 'Loading'
    });
    await loading.present();
    await this.optionservice.DeleteOption(id)
      .subscribe(res => {
        if (res.success) {
          this.toastService.create("Successfully deleted");
          loading.dismiss();
          this.getAlloption();
        }
        else {
          loading.dismiss();
          this.toastService.create(res.message);
        }
      });
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabHomePage } from '../tab-home/tab-home';
import { TabActiclePage } from '../tab-acticle/tab-acticle';
import { TabContactPage } from '../tab-contact/tab-contact';
import { TabCoursePage } from '../tab-course/tab-course';
import { TabServicePage } from '../tab-service/tab-service';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
tab1root:any =TabHomePage;
tab2root:any =TabActiclePage;
tab3root:any =TabContactPage;
tab4root:any =TabCoursePage;
tab5root:any =TabServicePage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}

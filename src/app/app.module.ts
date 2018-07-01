import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, Tabs } from 'ionic-angular';

import { MyApp } from './app.component';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabActiclePage } from '../pages/tab-acticle/tab-acticle';
import { TabContactPage } from '../pages/tab-contact/tab-contact';
import { TabHomePage } from '../pages/tab-home/tab-home';
import { TabServicePage } from '../pages/tab-service/tab-service';
import { TabCoursePage } from '../pages/tab-course/tab-course';
import { SidePortfolioPage } from '../pages/side-portfolio/side-portfolio';
import { SideSchedulePage } from '../pages/side-schedule/side-schedule';
import { SideSettingPage } from '../pages/side-setting/side-setting';
import { SidePaymentPage } from '../pages/side-payment/side-payment';
import { TabsPage } from '../pages/tabs/tabs';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
   TabActiclePage,
   TabContactPage,
   TabHomePage,
   TabServicePage,
   TabCoursePage,
   SidePortfolioPage,
   SideSchedulePage,
   SideSettingPage,
   SidePaymentPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    TabActiclePage,
   TabContactPage,
   TabHomePage,
   TabServicePage,
   TabCoursePage,
   SidePortfolioPage,
   SideSchedulePage,
   SideSettingPage,
   SidePaymentPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

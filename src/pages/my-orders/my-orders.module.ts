import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyOrdersPage } from './my-orders';
import { PipesModule } from "../../pipes/pipes.module";
import { Ionic2RatingModule } from 'ionic2-rating';

@NgModule({
  declarations: [
    MyOrdersPage,
  ],
  imports: [
    Ionic2RatingModule,
    PipesModule,
    IonicPageModule.forChild(MyOrdersPage),
  ],
})
export class MyOrdersPageModule {}

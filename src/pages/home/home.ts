import { Component } from '@angular/core';
import { IonicPage,NavController, ActionSheetController, MenuController,ToastController, Platform, LoadingController, Loading } from 'ionic-angular';
import { User } from '../../app/models/User' ;
import { UserProvider } from '../../providers/user/user';
import { MenuProvider } from '../../providers/menu/menu';
import { CartProvider } from '../../providers/cart/cart';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public user:User;
  lastImage: string = null;
  loading: Loading;
  constructor(  public cartprovider:CartProvider,public userprovider:UserProvider,public menuprovider:MenuProvider, public navCtrl: NavController,private menu: MenuController,  
                public actionSheetCtrl: ActionSheetController, 
                public toastCtrl: ToastController, public platform: Platform, public loadingCtrl: LoadingController) { 
    this.user = this.userprovider.user;
    this.menu.enable(true, 'sidenav'); 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }
  
 

public openAdmin(){
  this.navCtrl.push('AdminPage');
}



}

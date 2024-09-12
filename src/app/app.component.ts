import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, ToastController, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ArticlePage } from '../pages/article/article';
import { DataProvider } from '../providers/data/data';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: NavController;
  // @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  items = [];

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public toastCtrl: ToastController, public data: DataProvider) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage }
    ];

    this.initializeItems();

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      // this.statusBar.styleDefault();
      this.statusBar.styleLightContent();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  initializeItems() {
    // this.items = [
    //   'Amsterdam',
    //   'Bogota',
    //   'Buenos Aires',
    //   'Cairo',
    //   'Dhaka',
    //   'Edinburgh',
    //   'Geneva',
    //   'Genoa',
    //   'Glasglow',
    //   'Hanoi',
    //   'Hong Kong',
    //   'Islamabad',
    //   'Istanbul',
    //   'Jakarta',
    //   'Kiel',
    //   'Kyoto',
    //   'Le Havre',
    //   'Lebanon',
    //   'Lhasa',
    //   'Lima',
    //   'London',
    //   'Los Angeles',
    //   'Madrid',
    //   'Manila',
    //   'New York',
    //   'Olympia',
    //   'Oslo',
    //   'Panama City',
    //   'Peking',
    //   'Philadelphia',
    //   'San Francisco',
    //   'Seoul',
    //   'Taipeh',
    //   'Tel Aviv',
    //   'Tokio',
    //   'Uelzen',
    //   'Washington'
    // ];

    // this.items = [
    //   {title: 'North Richmond block party on Friday to celebrate mural debut',
    //     // desc: 'TestDesc1',
    //     date: '5/10/2018',
    //     category: 'Entertainment',
    //     img: 'http://richmondstandard.com/wp-content/uploads/2018/05/FB_IMG_1526008789311-265x198.jpg'
    //   },
    //   {title: 'Reddit co-founder visits Richmond after-school program',
    //     // desc: 'TestDesc1',
    //     date: '5/10/2018',
    //     category: 'Education',
    //     img: 'http://richmondstandard.com/wp-content/uploads/2018/05/alexisohanian-265x198.jpg'
    //   },
    //   {title: 'Richmond High School Graduation',
    //     // desc: 'TestDesc2',
    //     date: '5/8/2018',
    //     category: 'Education',
    //     img: 'http://richmondstandard.com/wp-content/themes/Newspaper/images/no-thumb/td_80x60.png'
    //   }
    // ]

    this.items = this.data.items;
  }

  getItems(ev) {
    // console.log(ev.target.value)
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.data.items.filter((item) => {
      // this.items = this.items.filter((item) => {
        // return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
        // return (item.desc.toLowerCase().indexOf(val.toLowerCase()) > -1 || item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
        return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  test(item){
    let toast = this.toastCtrl.create({
      message: `You selected ${item}`,
      duration: 3000,
      position: 'bottom'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

  viewArticle(item){
    console.log(item)
    this.nav.push(ArticlePage, item);
    // this.nav.push(ArticlePage, item, {animate: true, direction: 'back'});
  }

}

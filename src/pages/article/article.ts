import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';

@Component({
  selector: 'page-article',
  templateUrl: 'article.html',
})

export class ArticlePage {

  articleTitle;
  article = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public data: DataProvider, public viewCtrl: ViewController) {
    this.articleTitle = this.navParams.get('title');
    console.log(this.articleTitle)
    let article = this.data.items.find(article => article.title === this.articleTitle)
    this.article.push(article)
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad ArticlePage');
  }

  imageOpen() {
    this.viewCtrl.showBackButton(false);
  }

  imageClose() {
    this.viewCtrl.showBackButton(true);
  }

}

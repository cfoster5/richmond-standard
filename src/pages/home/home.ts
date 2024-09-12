import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { ArticlePage } from '../article/article';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  trendingItems = [
    "WCCUSD board to discuss SRO program’s future Wednesday",
    "Ribbon-cutting set for project connecting local greenways",
    "Contra Costa Animal Services offering free adoptions",
  ]

  option = {};
  articles = [];

  constructor(public navCtrl: NavController, public data: DataProvider) {

    this.data.items.sort(function(a, b) {
      var dateA = new Date(a.date), dateB = new Date(b.date)
      if (dateA > dateB)
        return -1
      if (dateA < dateB)
        return 1
      return 0
    });
    console.log("dataitems", this.data.items);
    this.articles.push(this.data.items[0])

  }

  search() {
    console.log("You clicked search")
  }

  getdata() {
    this.articles = [];
    for (let i = 0; i < this.data.items.length; i++) {
      if (this.data.items[i].category === this.option) {
          this.articles.push(this.data.items[i])
      }
    }
  }

  viewArticle(item){
    console.log(item)
    this.navCtrl.push(ArticlePage, item);
    // this.nav.push(ArticlePage, item, {animate: true, direction: 'back'});
  }

}

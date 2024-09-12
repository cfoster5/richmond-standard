import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

  items = [
    {
      title: 'North Richmond block party on Friday to celebrate mural debut',
      // desc: 'TestDesc1',
      date: '5/10/2018',
      category: 'Entertainment',
      img: 'http://richmondstandard.com/wp-content/uploads/2018/05/FB_IMG_1526008789311-265x198.jpg',
      body:
      "<p>A community-driven effort to beautify a central North Richmond grocer will culminate on Friday with a block party.</p><p>From 2:30 p.m. to 5:30 p.m., a new mural covering the exterior of the Rancho Market &amp; Deli at 500 Market Ave. is set to debut, and there will be food, music, live performances, kids activities and resource booths.</p><p>The photo above of the mural-in-progress was taken May 3 and posted by the Richmond Love Your Block Initiative, which partnered with Supervisor John Gioia’s office and the store’s owner to beautify one of North Richmond’s only grocers that doesn’t sell alcohol. The store is also a resource for parents and children at nearby Verde Elementary.</p><p>The project ballooned into a true community effort in which volunteers and several local businesses chipped in, including Kelly-Moore Paints in San Pablo, and Home Depot in El Cerrito.</p><p>The mural, called “Fabric of Unity,” was funded through a Richmond Arts &amp; Culture Commission Neighborhood Block grant. At Friday’s block party, lead artist Richard Salazar, assistant lead Agana Espinoza and youth apprentices will be on hand to introduce the artwork, which was created following a multi-month community process.</p><p>The mural honors “North Richmond’s rich history and brilliant future,” organizers said.</p><p>In support of Friday’s event, even more community helping hands joined. Supporters include Left Right &amp; Bear Handed, RecycleMore, Republica Services, Rich City Rides, Sunnyside Organic Seedlings, Urban Tilth, and Las Montanas Supermarket.</p>"
    },
    {
      title: 'Reddit co-founder visits Richmond after-school program',
      // desc: 'TestDesc1',
      date: '5/10/2018',
      category: 'Education',
      img: 'http://richmondstandard.com/wp-content/uploads/2018/05/alexisohanian-265x198.jpg',
      body:
      "<p>Alexis Ohanian Sr., co-founder of social media website Reddit and husband of tennis great Serena Williams, visited an after-school program in Richmond on Tuesday to inspire middle school students, according to a <a href='http://www.ktvu.com/news/reddit-co-founder-talks-tech-life-lessons-with-richmond-kids'>report by KTVU (Ch. 2)</a>.</p><p>Ohanian, 35, and four colleagues visited the After School All Stars program at Richmond College Prep Charter School “to pass along the lessons they’ve learned in business and in life to help the next generation become successful leaders,” the television news station reported.</p><p>Ohanian said he wanted to give the students “perspective on how we made it and how they can too,” and encouraged them to begin learning to code now.</p><p>The young students asked questions, and one 12-year-old even asked and received Ohanian’s email address, as the boy has a special project he may need help with.</p><p>For more, read the full KTVU report <a href='http://www.ktvu.com/news/reddit-co-founder-talks-tech-life-lessons-with-richmond-kids'>here</a>.</p><p>&nbsp;</p>"
    },
    {
      title: 'Richmond High School Graduation',
      // desc: 'TestDesc2',
      date: '5/8/2018',
      category: 'Education',
      img: 'http://www.b97.com/sites/g/files/giy826/f/styles/delta__775x515/public/Blogs/dreamstime_s_9239214.jpg?itok=21E1Qusq'
      // img: 'http://richmondstandard.com/wp-content/themes/Newspaper/images/no-thumb/td_80x60.png'
    }
  ]

  constructor(public http: HttpClient) {
    // console.log('Hello DataProvider Provider');
  }



}

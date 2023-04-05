import { Injectable } from '@angular/core';

@Injectable()
export class BooksService {

  constructor() { }
  getBooks(){
    return[
        {
          name:'Clean Code',
          author:'Robert C Martin',
          Image:'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/41SH-SvWPxL.jpg',
          amount:700,
        },
        {
          name:'The Pragmatic Programmer',
          author:'Andrew Hunt',
          Image:'https://m.media-amazon.com/images/I/41HXiIojloL._SX396_BO1,204,203,200_.jpg',
          amount:800,
        },
        {
          name:'Data Analysis with Python',
          author:' Rituraj Dixit',
          Image:'https://m.media-amazon.com/images/I/417cfb56BQL._SX404_BO1,204,203,200_.jpg',
          amount:736,
        },
        {
          name:'Automate the Boring Stuff with Python',
          author:'Al Sweigart',
          Image:'https://m.media-amazon.com/images/I/51B161E04DL._SX375_BO1,204,203,200_.jpg',
          amount:999,
        },
      ];
  }
}

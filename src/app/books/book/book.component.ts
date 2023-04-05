import { Component,OnInit,Input,Output,EventEmitter} from '@angular/core';
import { CartService } from 'src/app/cart/cart.service';
import { Book } from '../../types/Book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit{ 
  @Input() book: Book={} as Book;
 isIncart:boolean=false;
 constructor(private cartService:CartService){}
 ngOnInit():void{}
 addtocart(){
  this.isIncart=true;
  this.cartService.add(this.book);  
 }

 removefromcart(){
  this.isIncart=false;
  this.cartService.remove(this.book);
 }
}

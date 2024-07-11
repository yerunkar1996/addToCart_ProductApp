import { Component, DoCheck } from '@angular/core';
import { TransService } from './Services/trans.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck{
  title = 'addToCart';

  constructor(private trans: TransService){

  }

  cartLength:any=0
  ngOnInit(){
    this.cartLength = this.trans.cartData.length
  }

  totalQty:any=0


  ngDoCheck() {
    this.getTotalQty()
  }

  getTotalQty(){
    this.totalQty=0
    this.trans.cartData.map((data:any, index:any)=>{
      console.log(data,index)
      this.totalQty = this.totalQty + data.qty
    })
  }



}

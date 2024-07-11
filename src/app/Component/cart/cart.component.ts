import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { TransService } from 'src/app/Services/trans.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {


  constructor(private trans: TransService, private router: Router){  }

  ngOnInit(){
    this.getCartData()
    this.getTotalQty()
  }
cartData:any
  getCartData(){
      this.cartData = this.trans.cartData
  }


  productPage(){
    this.router.navigate(['/'])
  }

  totalPrice:any=0
  totalQty:any=0

  getTotalQty(){
    this.totalPrice=0
    this.totalQty=0
    this.trans.cartData.map((data:any, index:any)=>{
      console.log(data,index)
      this.totalQty = this.totalQty + data.qty
      this.totalPrice = Math.round( this.totalPrice + data.price*data.qty)
    })
  }






  addToCart(data:any){
    if(this.trans.cartData.includes(data)){
      alert("data Present")
      let index = this.trans.cartData.indexOf(data)

      this.trans.cartData[index].qty = this.trans.cartData[index].qty+1
      console.log(index, this.trans.cartData[index])
    }
    else{
      data.qty = 1
      this.trans.cartData.push(data)
      console.log(this.trans.cartData)
    }

    this.getTotalQty()
  }


  deleteFromCart(data:any){
    if(data.qty != 1){
      let index = this.trans.cartData.indexOf(data)

      this.trans.cartData[index].qty = this.trans.cartData[index].qty-1
      console.log(index, this.trans.cartData[index])
    }
    else{
      let index = this.trans.cartData.indexOf(data)
      this.trans,this.cartData.splice(index,1)
    }
    this.getTotalQty()
  }

}

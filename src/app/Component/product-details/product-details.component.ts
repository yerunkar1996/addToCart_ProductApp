import { Component } from '@angular/core';
import { TransService } from 'src/app/Services/trans.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {

  constructor(private trans: TransService){}


  productDetails:any
  ngOnInit(){
    this.getProductDetails()
  }


  getProductDetails(){
    this.trans.getApi().subscribe((data)=>{
      this.productDetails=data
      console.table(this.productDetails)
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
    
  }


}

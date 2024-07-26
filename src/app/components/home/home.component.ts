import { HookDirective } from './../../directives/hook.directive';
import { IProduct } from './../../modell/IProduct';
import { ICategory } from './../../modell/ICategory';
import { Component, OnChanges, OnInit, Pipe, SimpleChanges,Input } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { USDtoEGPPipe } from '../../pipes/usdto-egp.pipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, USDtoEGPPipe, HookDirective], // Include CommonModule in imports array
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent{
  iProducts:IProduct[];
  iCategories:ICategory[];
  card:number=0;
  selectedCategoryID:number=0;
  orderDate:Date;

  constructor(){
    this.orderDate=new Date();
    this.iProducts=[
      {id:1, name:"Lenove 17", price:940, quantity:10, imgURL:"https://picsum.photos/200", categoryID:1},
      {id:2, name:"Lenove 14", price:840, quantity:15, imgURL:"https://picsum.photos/200", categoryID:1},
      {id:3, name:"Mac Book 2023", price:1540, quantity:6, imgURL:"https://picsum.photos/200", categoryID:1},
      {id:4, name:"ASUS Inspiron 9", price:799, quantity:10, imgURL:"https://picsum.photos/200", categoryID:1},
      {id:5, name:"IPhone 14 Pro 512GB", price:1200, quantity:10, imgURL:"https://picsum.photos/200", categoryID:2},
      {id:6, name:"SAMSUNG S23FE 128GB", price:690, quantity:120, imgURL:"https://picsum.photos/200", categoryID:2},
      {id:7, name:"XIOMI X12", price:540, quantity:90, imgURL:"https://picsum.photos/200", categoryID:2},
      {id:8, name:"APPLE Watch 7", price:830, quantity:12, imgURL:"https://picsum.photos/200", categoryID:3},
      {id:9, name:"SAMSUNG Watch 3", price:610, quantity:16, imgURL:"https://picsum.photos/200", categoryID:3},
      {id:10, name:"HONOR Watch 1", price:214, quantity:102, imgURL:"https://picsum.photos/200", categoryID:3},
    ];
    this.iCategories=[
      {id:1, name:"Laptops"},
      {id:2, name:"phones"},
      {id:3, name:"watch"}
    ];
  }
  buy(params:string, product:IProduct):void {
    let qua = parseInt(params);
    if(qua <= product.quantity){
      this.card += parseInt(params)*product.price;
      product.quantity-=qua;
    }
    else throw new Error("Quantity mus be less or equal to Total Quantity!!")
  }

}

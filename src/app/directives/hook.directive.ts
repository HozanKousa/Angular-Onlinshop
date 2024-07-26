import { Directive, OnChanges, SimpleChanges } from '@angular/core';
import {Input } from '@angular/core';
@Directive({
  selector: '[appHook]',
  standalone: true
})

export class HookDirective implements OnChanges{
  @Input() testParm:string="";
  constructor() {
    console.log(`init value is ${this.testParm}`);
  }

  ngOnChanges(changes: SimpleChanges): void {
      console.log(`changed to ${this.testParm}`);
  }



}

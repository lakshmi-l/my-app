// tslint:disable-next-line: max-line-length
import { Component, OnInit, DoCheck, AfterViewInit, OnChanges, AfterContentInit, AfterContentChecked, AfterViewChecked, OnDestroy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

// tslint:disable-next-line: no-conflicting-lifecycle
@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
// tslint:disable-next-line: max-line-length
export class AddProductsComponent implements OnInit {
  myForm: FormGroup;

  constructor() { }
  ngOnInit() {
    this.myForm = new FormGroup({
      name: new FormControl(''),
      description: new FormControl(''),
      price: new FormControl(''),
      image: new FormControl(''),
      isAvailable: new FormControl('')
    });
  }
  onSubmit(data){
    console.log(data);
  }
}
